import axios from 'axios';
import { FIREBASE_URL} from "@env";

// const api_key = `${API_KEY}`;

export async function createUserGetCodeHandler(enteredPhoneNumber, setHasCode, hasCode, setEditable){

    console.log('and we\'re in!',"enteredPhoneNumber", enteredPhoneNumber)
    try{
        console.log('are we in heree')
        await axios.post(`https://createuser${FIREBASE_URL}`, {phone: enteredPhoneNumber });
        console.log('can we get here?')
        await axios.post(`https://requestonetimecode${FIREBASE_URL}`, { phone: enteredPhoneNumber });
        console.log('and we\'re in! 2')
        setHasCode(!hasCode);
        console.log('and we\'re in! 3')
        setEditable(false);
        console.log('and we\'re in!4')
    }catch( err ){
        console.log( err, "errrrrr" )
    }
}

export async function submitCodeGetTokenHandler(enteredPhoneNumber, verificationCode) {
    // console.log('This is where you have the code from twilio and you want to verify');
    // console.log("phoneNumber", enteredPhoneNumber, "CODE", verificationCode)
    console.log('in submit authOTP')

    try{
        let { data } = await axios.post(`https://verifyonetimepassword${FIREBASE_URL}`, 
        { phone: enteredPhoneNumber, code : verificationCode });
        console.log("DATTTTTA\n\n\n\n\n\n\n", data);
        console.log("WE HAVE THE DATA", "p",phone, "eN" ,enteredPhoneNumber, "c", code , "v", verificationCode)

    }catch(err){ 
        console.log(err);
    }
}