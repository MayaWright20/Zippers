import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import AuthOTPForm from './AuthOTPForm';

export default function AuthOTPContent({ isLogin, onAuthenticate }){

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        phone: false,
    });

    function submitHandler( credentials ) {
        let { phone, code } = credentials;

        console.log("credentials", phone,"code", code);
        
        onAuthenticate({ phone, code });
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