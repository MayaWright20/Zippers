import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import BackButton from '../components/Buttons/BackButton';
import ActionButton from '../components/Buttons/ActionButton';
import {AuthContext} from '../store/auth-context';
import { AuthOTPContext } from '../store/authOTP-context';

export default function SettingsScreen({ navigation }){

    const authCtx = useContext(AuthContext);
    const authOTPCtx = useContext(AuthOTPContext);

    function backButtonHandler(){
        navigation.navigate('Profile');
    }

    function logoutHandler(){
        authOTPCtx.logout();
        authCtx.logout();
    }

    return(
        <View>
            <BackButton onPress={backButtonHandler}/>
            {/* <Image source={{ uri: 'https://media.giphy.com/media/OWUSomNt8V5ZwaRIoa/giphy.gif'}}/> */}
            <Text>Settings Screen</Text>
            <ActionButton onPress={logoutHandler} title="Log out" style={undefined} buttonColor={undefined} buttonTitle={undefined}/>
        </View>
    )
}