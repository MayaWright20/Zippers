import axios from 'axios';
import { FIREBASE_URL} from "@env";

import LoadingOverlay from '../../components/Background/LoadingOverlay';

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


//same as onAuthenitcate
// export async function submitCodeGetTokenHandler({phone, code}) {
//     try{
//         let {data} = await axios.post(`https://verifyonetimepassword${FIREBASE_URL}`, 
//         { phone, code });
//         console.log("data",data)
        
//     }catch(err){ 
//         console.log(err);
//     }
// }