import React, { useState } from 'react';
import { View, Button } from 'react-native';

import { setDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/config'

import { COLORS } from '../../constants/COLORS';

import FormInput from '../FormInputs/FormInput';
import PhotoPicker from '../Photos/PhotoPicker';
import AddLocation from '../Location/AddLocation';
import { phoneNumber } from '../Auth/AuthOTPForm';

export default function UserDetailsForm({navTo}) {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAlias, setEnteredAlias] = useState('');
    const [userCity, setUserCity] = useState('');

    function updateUserCity(cityValue) {
        setUserCity(cityValue);
    }

    const [userLocation, setUserLocation] = useState([]);

    function updateUserLocation(location) {
        setUserLocation(location)
    }

    const [userPhotos, setUserPhotos] = useState([]);

    function updateUserPhotos(photos) {
        setUserPhotos(photos);
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'name':
                setEnteredName(enteredValue);
                break;
            case 'alias':
                setEnteredAlias(enteredValue);
                break;
        }
    }

    async function userDetailsFormHandler() {

            try {
                await setDoc(doc(db, phoneNumber, "userDetails"), {
                    name: enteredName,
                    alias: enteredAlias,
                    photos: userPhotos,
                    location: userLocation,
                    city: userCity
                }, { merge: true });
                navTo();
            } catch (e) {
                console.error("Error adding document:", e);
            }
    }

    return (
        <View>
            <FormInput label="Full name (Not shown on profile)" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: COLORS.LIGHT_AQUA }}
                onChangeText={updateInputValueHandler.bind(this, 'name')}
                value={enteredName}
                isInvalid={undefined}
                placeholder={null}
            />
            <FormInput label="Alias" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: COLORS.LIGHT_AQUA }}
                onChangeText={updateInputValueHandler.bind(this, 'alias')}
                value={enteredAlias}
                isInvalid={undefined}
                placeholder={null}
            />
            <AddLocation updateUserLocation={updateUserLocation} updateUserCity={updateUserCity} />
            <PhotoPicker updateUserPhotos={updateUserPhotos} />
            <Button title='Next 👉' onPress={userDetailsFormHandler} />
        </View>
    )
}