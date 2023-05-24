import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import AuthOTPContent from '../../components/Auth/AuthOTPContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { submitCodeGetTokenHandler } from '../../utils/authOTP';
import { COLORS } from '../../constants/COLORS';
import { AuthContext } from '../../store/auth-context';

export default function OTPLoginScreen(){

    const [ isAuthenticating, setIsAuthenticating ] = useState(false)

    const authCtx = useContext(AuthContext);

    // async function loginHandler({phone, code}){
    //     console.log("here two")
    //     console.log("PhoneCode","phone", phone, code)
    //     setIsAuthenticating(true)
    //     console.log("PhonetureCode","phone", phone, code)
    //     try{
    //         const token = await submitCodeGetTokenHandler(phone, code);
    //         console.log("PhonetureCodeeeeeeeee","phone", {phone, code})
    //         authCtx.authenticate(token);
    //         console.log('hi')
    //     } catch( error ){
    //         console.log("login error",error)
    //         Alert.alert('Authentication failed', 'Please check credentials or try again later');
    //         setIsAuthenticating(false)
    //     }
    // }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={COLORS.YELLOW} color={COLORS.LIGHT_BLUE}/>
    }

    return(
        <AuthOTPContent isLogin onAuthenticate={undefined}/>
    )
}