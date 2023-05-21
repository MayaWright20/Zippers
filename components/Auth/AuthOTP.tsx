import { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/COLORS';
import { FORM_STYLING } from '../../constants/FORM_STYLING';
import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';

import BackButton from '../Buttons/BackButton';
import FormInput from '../FormInput';


export default function AuthOTP({ isLogin, onSubmit, credentialsInvalid }) {

    const navigation = useNavigation();

    function BackButtonHandler(){
        navigation.navigate('AuthScreen')
    }

    const [enteredPhoneNumber, setEnteredPhoneNumber ] = useState('');

    const {
        phoneNumber: phoneNumberIsInvalid,
    } = credentialsInvalid;

    function submitHandler() {
        onSubmit({
            phoneNumber: enteredPhoneNumber,
        });
    }

    function updateInputValueHandler( inputType, enteredValue ) {
        
        switch( inputType ){
            case 'phoneNumber':
                console.log('phoneNumber', inputType, enteredValue)
                setEnteredPhoneNumber(enteredValue);
                break;
        }

    }

    return (
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: !isLogin ? COLORS.BABY_PINK : COLORS.YELLOW , flex: 1 }]}>
            <BackButton onPress={BackButtonHandler} />
            <Text style={{ ...FORM_STYLING.formTitle }}>{ !isLogin ? 'Sign up' : 'Log in'}</Text>
            <FormInput 
            label="Phone Number" 
            labelStyle={{ color: 'black' }} 
            inputStyle={{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }}
            onChangeText={updateInputValueHandler.bind(this, 'phoneNumber')}
            value={enteredPhoneNumber}
            keyboardType="phone-pad"
            isInvalid={phoneNumberIsInvalid}
            placeholder={null}
            />
            <Button title={ !isLogin ? 'Next 👉' : 'Log in 👉'} onPress={submitHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    dateOfBirthWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    dateOfBirth: {
        backgroundColor: 'red',
        width: WINDOW_WIDTH / 4
    }
})