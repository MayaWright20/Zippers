import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { login } from '../../utils/auth';
import { COLORS } from '../../constants/COLORS';
import { AuthContext } from '../../store/auth-context';

export default function LoginScreen(){
    const [ isAuthenticating, setIsAuthenticating ] = useState(false)

    const authCtx = useContext(AuthContext);

    async function loginHandler({email, password}){
        setIsAuthenticating(true)
        try{
            const token = await login(email, password);
            authCtx.authenticate(token);
        } catch( error ){
            Alert.alert('Authentication failed', 'Please check credentials or try again later');
            setIsAuthenticating(false)
        }
    }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={COLORS.YELLOW} color={COLORS.LIGHT_BLUE}/>
    }

    return(
        <AuthContent isLogin onAuthenticate={loginHandler}/>
    )
}