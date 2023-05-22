"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phone_1 = require("./phone");
const firebaseAdmin = require('firebase-admin');
const client = require('./twilio');
module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({ error: 'You must provide a phone number 🤙' });
    }
    const phone = String(req.body.phone).replace(/\+[^\d]/g, "");
    firebaseAdmin.auth().getUser(phone)
        .then((userRecord) => {
        const code = Math.floor((Math.random() * 8999 + 1000));
        client.messages.create({
            body: 'DO NOT SHARE YOUR CODE WITH ANYONE 🤐: \n Your Zippers code is:' + code,
            to: phone,
            from: phone_1.twilioPhone
        }, (err) => {
            if (err) {
                return res.status(422).send(err);
            }
            firebaseAdmin.database().ref('users/' + phone)
                .update({ code: code, codeValid: true }, () => {
                res.send({ success: true });
            });
        });
    }).catch((err) => {
        res.status(422).send({ error: err });
    });
};
//# sourceMappingURL=requestOneTimeCode.js.map