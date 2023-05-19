const admin = require('firebase-admin');

module.exports = function(req: { body: any }, res: {
    status: any; send: (arg0: any) => void 
}){
    if(!req.body.phone){
        return res.status(422).send({ error: 'There has been an error 💩'})
    }

    const phone = String(req.body.phone).replace(/\+[^\d]/g, "");

    admin.auth().createUser({ uid: phone })
    .then((user: any) => res.send(user))
    .catch((err: any) => res.status(422). send({ error: err}));
}


