import axios from 'axios';

const API_KEY = 'AIzaSyBmn9-BUNrwGGntbKsVruvPFP_Qe0ycfO0';

async function authenticate(mode, email, password){
    const url = `https://verifyonetimepassword-2tvaasa22q-uc.a.run.app`

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    const token = response.data.idToken;
    return token;
}


export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export function login(email, password){
    return authenticate('signInWithPassword', email, password);
}