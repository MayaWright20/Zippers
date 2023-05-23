import React, { useState } from 'react';
import axios from 'axios';
import {FIREBASE_URL} from "@env";

import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/COLORS';
import { FORM_STYLING } from '../../constants/FORM_STYLING';
import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';
// import { FIREBASE_AUTH_PATH } from '../../constants/FIREBASE_URL';


import BackButton from '../Buttons/BackButton';
import FormInput from '../FormInputs/FormInput';
import FormUnderlineInput from '../FormInputs/FormUnderlineInput';


export default function AuthOTP({ isLogin, onSubmit, credentialsInvalid }) {

    const navigation = useNavigation();

    function BackButtonHandler() {
        navigation.navigate('AuthScreen')
    }

    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [ editable, setEditable ] = useState(true);
    const [enteredVerificationCode1, setEnteredVerificationCode1] = useState('');
    const [enteredVerificationCode2, setEnteredVerificationCode2] = useState('');
    const [enteredVerificationCode3, setEnteredVerificationCode3] = useState('');
    const [enteredVerificationCode4, setEnteredVerificationCode4] = useState('');
    
    const verificationCode = enteredVerificationCode1 + enteredVerificationCode2 + enteredVerificationCode3 + enteredVerificationCode4;

    const [ hasCode, setHasCode ] = useState(false);

    const {
        phoneNumber: phoneNumberIsInvalid,
    } = credentialsInvalid;


    async function getCodeHandler(){
        try{
            await axios.post(`https://createuser${FIREBASE_URL}`, {phone: enteredPhoneNumber });
            await axios.post(`https://requestonetimecode${FIREBASE_URL}`, { phone: enteredPhoneNumber });
            setHasCode(!hasCode);
            setEditable(false)
        }catch( err ){
            console.log( err )
        }
    }

    async function submitCodeHandler() {
        console.log('This is where you have the code from twilio and you want to verify');
        console.log("phoneNumber", enteredPhoneNumber, "CODE", verificationCode)

        try{
            let { data } = await axios.post(`https://verifyonetimepassword${FIREBASE_URL}`, 
            { phone: enteredPhoneNumber, code : verificationCode });
            console.log("DATTTTTA\n\n\n\n\n\n\n", data);

        }catch(err){ 
            console.log(err);
        }
        // onSubmit({
        //     phoneNumber: enteredPhoneNumber,
        // });
    }



    function updateInputValueHandler(inputType, enteredValue) {

        switch (inputType) {
            case 'phoneNumber':
                console.log('phoneNumber', inputType, enteredValue)
                setEnteredPhoneNumber(enteredValue);
                break;
            case 'verificationCode1':
                setEnteredVerificationCode1(enteredValue);
                break;
            case 'verificationCode2':
                setEnteredVerificationCode2(enteredValue);
                break;
            case 'verificationCode3':
                setEnteredVerificationCode3(enteredValue);
                break;
            case 'verificationCode4':
                setEnteredVerificationCode4(enteredValue);
                break;
        }

    }

    return (
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: !isLogin ? COLORS.BABY_PINK : COLORS.YELLOW, flex: 1 }]}>
            <BackButton onPress={BackButtonHandler} />
            <Text style={{ ...FORM_STYLING.formTitle }}>{!isLogin ? 'Sign up' : 'Log in'}</Text>
            <FormInput
                label="Phone Number"
                labelStyle={{ color: 'black' }}
                inputStyle={[{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }, { color: editable === true ? 'black' : 'grey' }]}
                value={enteredPhoneNumber}
                keyboardType="phone-pad"
                isInvalid={phoneNumberIsInvalid}
                placeholder={null}
                editable={editable} 
                maxLength={undefined} 
                onChangeText={updateInputValueHandler.bind(this, 'phoneNumber')} 
                secure={undefined}            
                />
            {hasCode ?
                <View style={styles.verificationCodeWrapper}>
                    <FormInput
                        label="Code"
                        labelStyle={{ color: 'black' }}
                        inputStyle={[{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }, styles.verificationCodeItem]}
                        onChangeText={updateInputValueHandler.bind(this, 'verificationCode1')}
                        value={enteredVerificationCode1}
                        keyboardType="number-pad"
                        isInvalid={undefined}
                        placeholder={null}
                        maxLength={1}
                        secure={undefined}                    
                        />
                    <FormInput
                        label={undefined}
                        labelStyle={{ color: 'black' }}
                        inputStyle={[{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }, styles.verificationCodeItem]}
                        onChangeText={updateInputValueHandler.bind(this, 'verificationCode2')}
                        value={enteredVerificationCode2}
                        keyboardType="number-pad"
                        isInvalid={undefined}
                        placeholder={null}
                        secure={undefined} 
                        maxLength={1}
                    />
                    <FormInput
                        label={undefined}
                        labelStyle={{ color: 'black' }}
                        inputStyle={[{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }, styles.verificationCodeItem]}
                        onChangeText={updateInputValueHandler.bind(this, 'verificationCode3')}
                        value={enteredVerificationCode3}
                        keyboardType="number-pad"
                        isInvalid={undefined}
                        secure={undefined} 
                        placeholder={null}
                        maxLength={1}
                    />
                    <FormInput
                        label={undefined}
                        labelStyle={{ color: 'black' }}
                        inputStyle={[{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }, styles.verificationCodeItem]}
                        onChangeText={updateInputValueHandler.bind(this, 'verificationCode4')}
                        value={enteredVerificationCode4}
                        keyboardType="number-pad"
                        isInvalid={undefined}
                        placeholder={null}
                        secure={undefined} 
                        maxLength={1}
                    />

                </View> : null


            }
            <Button title={!hasCode? 'Get Code 👉' : 'Sign up 👉'} onPress={!hasCode ? getCodeHandler : submitCodeHandler } />

            {/* <Button title={!isLogin ? 'Next 👉' : 'Log in 👉'} onPress={!isLogin ? createUserHandler : submitHandler } /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    verificationCodeWrapper:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    verificationCodeItem:{
        width: WINDOW_WIDTH / 7,
        height: WINDOW_WIDTH / 7,
        textAlign: 'center'
    }
})