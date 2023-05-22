import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../models/user';
import { COLORS } from '../../constants/COLORS';
import { FORM_STYLING } from '../../constants/FORM_STYLING';

import FormInput from '../FormInputs/FormInput';
import BackButton from '../Buttons/BackButton';
import Constants from 'expo-constants';
import PhotoPicker from '../Photos/PhotoPicker';
import AddLocation from '../Location/AddLocation';

export default function UserDetailsForm() {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAlias, setEnteredAlias] = useState('');

    const [ userCity, setUserCity ] = useState('');

    function updateUserCity(cityValue) {
        setUserCity(cityValue);
    }

    const [ userLocation, setUserLocation ] = useState([]);

    function updateUserLocation( location ){
        setUserLocation( location )
    }

    const [ userPhotos, setUserPhotos ] = useState([]);


    
    function updateUserPhotos( photos ){
        setUserPhotos( photos );
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'name':
                console.log('name', inputType, enteredValue)
                setEnteredName(enteredValue);
                break;
            case 'alias':
                setEnteredAlias(enteredValue);
                break;
        }
    }

    const navigation = useNavigation();

    function userDetailsFormHandler() {
        const user = new User( enteredName, enteredAlias, userPhotos, userLocation, userCity );
        console.log('send user to firebase', user)
        navigation.navigate('Welcome', { screen: 'Discover' });
    }

    return (
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: 'pink', flex: 1 }]}>
            <View>
                <FormInput label="Name (Not shown on profile)" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: COLORS.LIGHT_AQUA }}
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



                <PhotoPicker updateUserPhotos={updateUserPhotos}/>

                <Button title='Next 👉' onPress={userDetailsFormHandler} />
            </View>

            {/* Button that says next - links to other modal view that asks about who youre trying to find. e.g interested in men, women, all, how face they can be, age range */}
        </View>
    )
}