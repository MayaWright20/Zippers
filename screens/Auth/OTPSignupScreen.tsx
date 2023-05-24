import axios from 'axios';
import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthOTPContent from '../../components/Auth/AuthOTPContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { FIREBASE_URL} from "@env";
import { AuthOTPContext } from '../../store/authOTP-context';
import { COLORS } from '../../constants/COLORS';

export default function SignupScreen({ navigation}){
    
    const [ isAuthenticating, setIsAuthenticating ] = useState(false)
    const authCtx = useContext(AuthOTPContext);

    async function signupHandler({phone, code}){
        console.log('signup handler')
        setIsAuthenticating(true)
            try{
                let {data} = await axios.post(`https://verifyonetimepassword${FIREBASE_URL}`, 
                { phone, code });
                const token = data.token;
                authCtx.authenticate(token);
                navigation.navigate('UserProfileScreen');
            }catch(err){ 
                Alert.alert('Authentication failed 💩', 'Please check credentials or try again later');
                setIsAuthenticating(false)
            }
    }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={COLORS.LIGHT_PINK} color={COLORS.LIGHT_AQUA}/>
    }

    return(
        <AuthOTPContent onAuthenticate={signupHandler} isLogin={false}/>
    )
}