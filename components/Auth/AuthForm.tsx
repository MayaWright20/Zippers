import { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/COLORS';
import { FORM_STYLING } from '../../constants/FORM_STYLING';
import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';

import BackButton from '../Buttons/BackButton';
import FormInput from '../FormInputs/FormInput';


export default function AuthForm({ isLogin, onSubmit, credentialsInvalid, showModal }) {

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
        {!isLogin? showModal() : null}
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
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: !isLogin ? COLORS.LIGHT_PINK : COLORS.YELLOW, flex: 1}]}>
            {isLogin?<BackButton onPress={BackButtonHandler} />:null}
            <Text style={{ ...FORM_STYLING.formTitle }}>{ !isLogin ? 'Sign up' : 'Log in'}</Text>
            <FormInput label="Email" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }}
            onChangeText={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
            placeholder={null}
            secureTextEntry={false} editable={undefined} maxLength={undefined} secure={undefined}            />
            {!isLogin && (
                <FormInput label="Confirm Email" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }}
                onChangeText={updateInputValueHandler.bind(this, 'confirmEmail')}
                value={enteredConfirmEmail}
                keyboardType="email-address"
                isInvalid={emailsDontMatch}
                placeholder={null}
                secure
                secureTextEntry={false} editable={undefined} maxLength={undefined}                />
            )}
            <FormInput label="Password" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }}
            onChangeText={updateInputValueHandler.bind(this, 'password')}
            secure
            placeholder={null}
            value={enteredPassword}
            secureTextEntry={true}
            // value={hidePassword}
            isInvalid={passwordIsInvalid} editable={undefined} maxLength={undefined} keyboardType={undefined}            />
            {!isLogin && (
                <FormInput label="Confirm Password" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }}
                onChangeText={updateInputValueHandler.bind(this, 'confirmPassword')}
                placeholder={null}
                value={enteredConfirmPassword}
                isInvalid={passwordsDontMatch}
                secure
                secureTextEntry={true} editable={undefined} maxLength={undefined} keyboardType={undefined}                />
            )}
            {!isLogin && (
                <View style={styles.dateOfBirthWrapper}>
                    <FormInput label="Date of Birth" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, { backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }]}
                    onChangeText={updateInputValueHandler.bind(this, 'dayOfBirth')}
                    value={enteredDayOfBirth}
                    placeholder="D"
                    keyboardType="number-pad"
                    isInvalid={dayOfBirthIsInvalid}
                    secure
                    maxLength={2}
                    secureTextEntry={false} editable={undefined}                    />
                    <FormInput label="" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, { backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }]}
                    onChangeText={updateInputValueHandler.bind(this, 'monthOfBirth')}
                    value={enteredMonthOfBirth}
                    keyboardType="number-pad"
                    placeholder="M"
                    isInvalid={monthOfBirthIsInvalid}
                    secure
                    maxLength={2}
                    secureTextEntry={false} editable={undefined}                    />
                    <FormInput label="" labelStyle={{ color: 'black' }} inputStyle={[styles.dateOfBirth, { backgroundColor: !isLogin ? COLORS.LIGHT_AQUA : COLORS.LIGHT_BLUE }]}
                    onChangeText={updateInputValueHandler.bind(this, 'yearOfBirth')}
                    value={enteredYearOfBirth}
                    placeholder="Y"
                    keyboardType="number-pad"
                    isInvalid={yearOfBirthIsInvalid}
                    secure
                    maxLength={4}
                    secureTextEntry={false} editable={undefined}                    />
                </View>
            )}
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
        width: WINDOW_WIDTH / 7,
        height: WINDOW_WIDTH / 7,
        textAlign: 'center'
    }
})