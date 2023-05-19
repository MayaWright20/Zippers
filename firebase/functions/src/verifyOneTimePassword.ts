const authAdmin = require('firebase-admin');

module.exports = function( req: { body: { phone: any; code: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: any; }): any; new(): any; }; }; send: (arg0: { token: any; }) => any; }){
    if(!req.body.phone || !req.body.code ){
        return res.status(422).send({ error: 'Phone number and code must be provided 👎'})
    }

    const phone = String(req.body.phone).replace(/\+[^\d]/g,'');
    const code = parseInt(req.body.code);

    authAdmin.auth().getUser(phone)
    .then(()=>{
        const ref = authAdmin.database().ref('users/' + phone);
        ref.on('value', (snapshot: { val: () => any; }) =>{
            ref.off();
            const user = snapshot.val();
            if(user.code !== code || !user.codeValid){
                return res.status(422).send({error: 'Code not valid 😢'})
            }
            ref.update({ codeValid: false })


            authAdmin.auth().createCustomToken(phone).then((token: any) => res.send({token: token}))
        })
    }).catch((err: any)=> res.status(422).send({ error: err }))
}