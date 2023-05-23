import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import AuthOTPForm from './AuthOTPForm';

export default function AuthOTPContent( isLogin, onAuthenticate ){

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        phoneNumber: false,
    });

    function submitHandler( credentials ) {
        
        let { phoneNumber } = credentials;

        phoneNumber = phoneNumber.trim();

        const phoneNumberIsValid = phoneNumber.length > 0 && phoneNumber.length <= 14;

        if ( !phoneNumberIsValid ) {
            Alert.alert('Invalid input', 'Please check your entered phone number.');
            setCredentialsInvalid({
                phoneNumber: !phoneNumberIsValid
            });
            return;
        }
        onAuthenticate({ phoneNumber });
    }

    return(
        <View style={{ flex: 1 }}>
            <AuthOTPForm
            isLogin={isLogin}
            credentialsInvalid={credentialsInvalid}
            onSubmit={submitHandler}
            />
        </View>
    )
}