import { useState } from 'react';
import { Alert, View } from 'react-native';

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/config'

import AuthForm from './AuthForm';
import { phoneNumber } from './AuthOTPForm';

export default function AuthContent({ isLogin, onAuthenticate, showModal }) {

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
        let ageInYears;


        function isOver18(age: Date): boolean {
            const ageInMilliseconds = Date.now() - age.getTime();
            ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
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





        

        // const cityRef = doc(db, 'cities', 'BJ');
        // setDoc(cityRef, { capital: true }, { merge: true });
        
        
        async function addEmailAgeFirestore() {
            try {
                console.log('add to firestore');
                // const docRef = await addDoc(collection(db, "userDetails"), {
                //     email: email,
                //     age: ageInYears
                // });
                // const cityRef = doc(db, 'cities', 'BJ');
                // setDoc(cityRef, { capital: true }, { merge: true });
                

                //need to access the phone number 
                // await setDoc(doc(db, phoneNumber, "userDetails"), {
                //     email: email,
                //     age: ageInYears
                // }, { merge: true });

                await setDoc(doc(db, phoneNumber, "userDetails"), {
                    email: email,
                    age: ageInYears
                }, { merge: true });


                // console.log("Document written with ID:", docRef.id);
                console.log("Document written with ID")
            } catch (e) {
                console.error("Error adding document:", e);
            }
        }
        addEmailAgeFirestore()
        onAuthenticate({ email, password });
    }

    return (
        <View style={{ flex: 1 }}>
            <AuthForm
                isLogin={isLogin}
                credentialsInvalid={credentialsInvalid}
                onSubmit={submitHandler}
                showModal={showModal}
            />
        </View>
    )
};
