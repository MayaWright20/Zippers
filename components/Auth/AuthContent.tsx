import { useState } from 'react';
import { Alert, View } from 'react-native';

import AuthForm from './AuthForm';
import AuthOTPContent from './AuthOTPContent';

export default function AuthContent({ isLogin, onAuthenticate }) {

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
        dayOfBirth: false,
        monthOfBirth: false,
        yearOfBirth: false
    });

    function submitHandler(credentials) {
        
        let { email, confirmEmail, password, confirmPassword, yearOfBirth, monthOfBirth, dayOfBirth } = credentials;

        const age = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);

        function isOver18(age: Date): boolean {
            const ageInMilliseconds = Date.now() - age.getTime();
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
            return ageInYears >= 18;
        }

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.length > 0 && email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;
        const dayOfBirthIsValid = dayOfBirth >= 1 && dayOfBirth <= 31;
        const monthOfBirthIsValid = monthOfBirth >= 1 && monthOfBirth <= 12;
        const yearOfBirthIsValid = yearOfBirth <= new Date().getFullYear() && yearOfBirth >= 1900;
        const ageIsValid = isOver18(age) === true;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual || !dayOfBirthIsValid || !monthOfBirthIsValid || !yearOfBirthIsValid || !ageIsValid))
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordsAreEqual,
                dayOfBirth: !dayOfBirthIsValid,
                monthOfBirth: !monthOfBirthIsValid,
                yearOfBirth: !yearOfBirthIsValid
            });
            return;
        }
        onAuthenticate({ email, password });
    }

    return (
        <View style={{ flex: 1 }}>
            <AuthOTPContent/>
            <AuthForm
                isLogin={isLogin}
                credentialsInvalid={credentialsInvalid}
                onSubmit={submitHandler}
            />
        </View>
    )
};
