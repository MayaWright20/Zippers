const firebaseAdmin = require('firebase-admin');
const client = require('./twilio');

module.exports = function(req: { body: { phone: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: any; }): void; new(): any; }; }; send: (arg0: { success: boolean; }) => void; }){
    if(!req.body.phone){
        return res.status(422).send({ error: 'You must provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/\+[^\d]/g, "");

    firebaseAdmin.auth().getUser(phone)
    .then((userRecord: any) =>{
        const code = Math.floor((Math.random() * 8999 + 1000));

        client.messages.create({
            body: 'DO NOT SHARE YOUR CODE WITH ANYONE 🤐: \n Your Zippers code is:' + code,
            to: phone,
            from: '+447380280690'
        }, (err: { error: any; }) => {
            if( err ){ return res.status(422).send(err);}

            firebaseAdmin.database().ref('users/' + phone)
            .update({ code: code, codeValid: true}, ()=>{
                res.send({ success: true })
            })
        })
    }).catch((err: any)=>{
        res.status(422).send({error: err})
    })

}