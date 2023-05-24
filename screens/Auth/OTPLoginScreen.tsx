import axios from 'axios';
import { useState, useContext } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';
import AuthOTPContent from '../../components/Auth/AuthOTPContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { FIREBASE_URL} from "@env";
import { submitCodeGetTokenHandler } from '../../utils/authOTP';
import { COLORS } from '../../constants/COLORS';
import { AuthContext } from '../../store/auth-context';
import { AuthOTPContext} from '../../store/authOTP-context';

export default function OTPLoginScreen({navigation}){

    const [ isAuthenticating, setIsAuthenticating ] = useState(false);
    const authCtx = useContext(AuthOTPContext);

    async function loginHandler({phone, code}){
        setIsAuthenticating(true)
        try{
            let {data} = await axios.post(`https://verifyonetimepassword${FIREBASE_URL}`, 
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