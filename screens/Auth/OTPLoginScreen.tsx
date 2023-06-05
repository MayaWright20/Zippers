import axios from 'axios';
import { useState, useContext } from 'react';

import { Alert } from 'react-native';
import AuthOTPContent from '../../components/Auth/AuthOTPContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { FIREBASE_URL} from "@env";
import { COLORS } from '../../constants/COLORS';
import { AuthOTPContext} from '../../store/authOTP-context';

export default function OTPLoginScreen({navigation}){

    const [ isAuthenticating, setIsAuthenticating ] = useState(false);
    const authCtx = useContext(AuthOTPContext);

    async function loginHandler({phone, code}){
        setIsAuthenticating(true)
        try{
            let {data} = await axios.post(`https://verifyonetimecode${FIREBASE_URL}`, 
                { phone, code });
                const token = data.token;
                authCtx.authenticate(token);
                navigation.navigate('TabNavigator', {screen: 'Discover'});
        } catch( error ){
            Alert.alert('Authentication failed 💩', 'Please check credentials or try again later');
            setIsAuthenticating(false)
        }
    }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={COLORS.YELLOW} color={COLORS.LIGHT_BLUE}/>
    }

    return(
        <AuthOTPContent isLogin onAuthenticate={loginHandler}/>
    )
}