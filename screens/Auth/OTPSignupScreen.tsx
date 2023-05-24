import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthOTPContent from '../../components/Auth/AuthOTPContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { AuthOTPContext } from '../../store/authOTP-context';
import { submitCodeGetTokenHandler, createUserGetCodeHandler } from '../../utils/authOTP';
import { COLORS } from '../../constants/COLORS';

export default function SignupScreen({ navigation, enteredPhoneNumber, verificationCode }){
    
    const [ isAuthenticating, setIsAuthenticating ] = useState(false)
    const authCtx = useContext(AuthOTPContext);

    // async function signupHandler({enteredPhoneNumber, verificationCode}){
    //     setIsAuthenticating(true)
    //     try{
    //         const token = await submitCodeGetTokenHandler(enteredPhoneNumber, verificationCode)
    //         authCtx.authenticate(token);
            
    //         //navigate to a page that will ask for details - already have age from sign up form 
    //         navigation.navigate('UserProfileScreen')

    //     }catch(error){
    //         Alert.alert('Authentication failed', 'Please check credentials or try again later');
    //         setIsAuthenticating(false)
    //     }
    // }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={COLORS.LIGHT_PINK} color={COLORS.LIGHT_AQUA}/>
    }

    return(
        <AuthOTPContent onAuthenticate={undefined}/>
    )
}