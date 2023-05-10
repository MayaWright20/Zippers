import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';

import { AuthContext } from '../../store/auth-context';
import { createUser } from '../../utils/auth';
import { Colors } from '../../constants/Colors';

export default function SignupScreen({ navigation }){
    
    const [ isAuthenticating, setIsAuthenticating ] = useState(false)
    const authCtx = useContext(AuthContext);

    async function signupHandler({email, password}){
        setIsAuthenticating(true)
        try{
            const token = await createUser(email, password)
            authCtx.authenticate(token);
            
            //navigate to a page that will ask for details - already have age from sign up form 
            navigation.navigate('UserProfileScreen')

        }catch(error){
            Alert.alert('Authentication failed', 'Please check credentials or try again later');
            setIsAuthenticating(false)
        }
    }

    if( isAuthenticating ){
        return <LoadingOverlay backgroundColor={Colors.LightPink} color={Colors.LightAqua}/>
    }

    return(
        <AuthContent onAuthenticate={signupHandler}/>
    )
}