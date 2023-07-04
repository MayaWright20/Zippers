import axios from 'axios';
import { FIREBASE_URL } from "@env";

export async function createUser( enteredPhoneNumber,setHasCode, hasCode, setEditable ){
    try{
        await axios.post(`https://createuser${FIREBASE_URL}`, { phone: enteredPhoneNumber });
        await getCode(enteredPhoneNumber, setHasCode, hasCode, setEditable)
    }catch( err ){
        return console.log( err, "create user error" )
    }
}

export async function getCode( enteredPhoneNumber, setHasCode, hasCode, setEditable ){
    try{
        await axios.post(`https://requestonetimecode${FIREBASE_URL}`, { phone: enteredPhoneNumber });
        console.log('OTP requested');
        setHasCode(!hasCode);
        setEditable(false);
    }catch( err ){
        console.log( err )
    }
}