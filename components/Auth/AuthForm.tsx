import { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/Colors';
import { FormStyling } from '../../constants/FormStyling';
import { WindowWidth } from '../../constants/Dimentions';

import BackButton from '../Buttons/BackButton';
import FormInput from '../FormInput';


export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {

    const navigation = useNavigation();

    function BackButtonHandler(){
        navigation.navigate('AuthScreen')
    }

    const [enteredEmail, setEnteredEmail ] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    const [enteredDayOfBirth, setEnteredDayOfBirth] = useState('');
    const [enteredMonthOfBirth, setEnteredMonthOfBirth] = useState('');
    const [enteredYearOfBirth, setEnteredYearOfBirth] = useState('');

    const {
        email: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
        dayOfBirth: dayOfBirthIsInvalid,
        monthOfBirth: monthOfBirthIsInvalid,
        yearOfBirth: yearOfBirthIsInvalid
    } = credentialsInvalid;

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            dayOfBirth: enteredDayOfBirth,
            monthOfBirth: enteredMonthOfBirth,
            yearOfBirth: enteredYearOfBirth
        });
    }

    function updateInputValueHandler(inputType, enteredValue) {
        
        switch( inputType ){
            case 'email':
                console.log('email', inputType, enteredValue)
                setEnteredEmail(enteredValue);
                break;
            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
            case 'dayOfBirth':
                setEnteredDayOfBirth(enteredValue);
                break;
            case 'monthOfBirth':
                setEnteredMonthOfBirth(enteredValue);
                break;
            case 'yearOfBirth':
                setEnteredYearOfBirth(enteredValue);
                break;
        }
    }

    return (
        <View style={[{ ...FormStyling.formContainer, backgroundColor: !isLogin ? 'pink' : 'yellow', flex: 1 }]}>
            <BackButton onPress={BackButtonHandler} />
            <Text style={{ ...FormStyling.formTitle }}>{ !isLogin ? 'Sign up' : 'Log in'}</Text>
            <FormInput label="Email" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue }}
            onChangeText={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
            placeholder={null}
            />
            {!isLogin && (
                <FormInput label="Confirm Email" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue }}
                onChangeText={updateInputValueHandler.bind(this, 'confirmEmail')}
                value={enteredConfirmEmail}
                keyboardType="email-address"
                isInvalid={emailsDontMatch}
                placeholder={null}
                secure
                />
            )}
            <FormInput label="Password" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue }}
            onChangeText={updateInputValueHandler.bind(this, 'password')}
            secure
            placeholder={null}
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
            />
            {!isLogin && (
                <FormInput label="Confirm Password" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue }}
                onChangeText={updateInputValueHandler.bind(this,'confirmPassword')}
                placeholder={null}
                value={enteredConfirmPassword}
                isInvalid={passwordsDontMatch}
                secure
                />
            )}
            {!isLogin && (
                <View style={styles.dateOfBirthWrapper}>
                    <FormInput label="Date of Birth" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, {backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue}]}
                        onChangeText={updateInputValueHandler.bind(this, 'dayOfBirth')}
                        value={enteredDayOfBirth}
                        placeholder="Day"
                        keyboardType="number-pad"
                        isInvalid={dayOfBirthIsInvalid}
                        secure
                        maxLength={2}
                    />
                    <FormInput label="" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, {backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue}]}
                        onChangeText={updateInputValueHandler.bind(this, 'monthOfBirth')}
                        value={enteredMonthOfBirth}
                        keyboardType="number-pad"
                        placeholder="Month"
                        isInvalid={monthOfBirthIsInvalid}
                        secure
                        maxLength={2}
                    />
                    <FormInput label="" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, {backgroundColor: !isLogin ? Colors.LightAqua : Colors.LightBlue}]}
                        onChangeText={updateInputValueHandler.bind(this, 'yearOfBirth')}
                        value={enteredYearOfBirth}
                        placeholder="Year"
                        keyboardType="number-pad"
                        isInvalid={yearOfBirthIsInvalid}
                        secure
                        maxLength={4}
                    />
                </View>
            )}
            <Button title={ !isLogin ? 'Sign up 👉' : 'Log in 👉'} onPress={submitHandler}>{ isLogin ? 'Log In' : 'Sign Up' }</Button>
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
        width: WindowWidth / 4
    }
})