"use strict";
const authAdmin = require('firebase-admin');
module.exports = function (req, res) {
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ error: 'Phone number and code must be provided 👎' });
    }
    const phone = String(req.body.phone).replace(/\+[^\d]/g, '');
    const code = parseInt(req.body.code);
    authAdmin.auth().getUser(phone)
        .then(() => {
        const ref = authAdmin.database().ref('users/' + phone);
        ref.on('value', (snapshot) => {
            ref.off();
            const user = snapshot.val();
            if (user.code !== code || !user.codeValid) {
                return res.status(422).send({ error: 'Code not valid 😢' });
            }
            ref.update({ codeValid: false });
            authAdmin.auth().createCustomToken(phone).then((token) => res.send({ token: token }));
        });
    }).catch((err) => res.status(422).send({ error: err }));
};
//# sourceMappingURL=verifyOneTimePassword.js.map