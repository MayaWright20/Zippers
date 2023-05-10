import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import BackButton from '../components/Buttons/BackButton';
import ActionButton from '../components/Buttons/ActionButton';
import {AuthContext} from '../store/auth-context';

export default function SettingsScreen({ navigation }){

    const authCtx = useContext(AuthContext);

    function backButtonHandler(){
        navigation.navigate('Profile');
    }

    function logoutHandler(){
        authCtx.logout()
    }

    return(
        <View>
            <BackButton onPress={backButtonHandler}/>
            {/* <Image source={{ uri: 'https://media.giphy.com/media/OWUSomNt8V5ZwaRIoa/giphy.gif'}}/> */}
            <Text>Settings Screen</Text>
            <ActionButton onPress={logoutHandler} title="Log out"/>
        </View>
    )
}