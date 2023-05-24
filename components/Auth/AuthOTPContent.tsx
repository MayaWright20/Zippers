import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import AuthOTPForm from './AuthOTPForm';

import { submitCodeGetTokenHandler } from '../../utils/authOTP';

export default function AuthOTPContent({ isLogin, onAuthenticate }){

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        code: false,
    });

    function submitHandler( credentials ) {
        // ({enteredPhoneNumber, verificationCode});
        // console.log("phone 1", phone, "code", code,"credentials", credentials)
        let { phone, code } = credentials;
        console.log("phone 2", phone, "code", code,"credentials", credentials)
        console.log("COOOOOODE LENGTH", code)
        // phone = phone.trim();

        // const phoneIsValid = phone.length > 0 && phone.length <= 14;
        

        // if ( !codeIsValid ) {
        //     Alert.alert('Invalid Code 💩', 'Please check your entered phone number .');
        //     setCredentialsInvalid({
        //         code: true
        //     });
        //     return;
        // }
        
        console.log("here", phone, code)
        onAuthenticate( {phone, code });
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