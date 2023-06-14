import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AuthContent from '../../components/Auth/AuthContent';
import UserDetailsForm from '../../components/Profiles/UserDetailsForm';

export default function UserProfileScreen(){
    return(
        <View style={styles.container}>
            <AuthContent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});