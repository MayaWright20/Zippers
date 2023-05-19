"use strict";
const admin = require('firebase-admin');
module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({ error: 'There has been an error 💩' });
    }
    const phone = String(req.body.phone).replace(/\+[^\d]/g, "");
    admin.auth().createUser({ uid: phone })
        .then((user) => res.send(user))
        .catch((err) => res.status(422).send({ error: err }));
};
//# sourceMappingURL=createAuthUser.js.map