import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/Colors';
import { FormStyling } from '../../constants/FormStyling';

import FormInput from '../../components/FormInput';
import BackButton from '../Buttons/BackButton';
import Constants from 'expo-constants';
import PhotoPicker from '../Photos/PhotoPicker';
import AddLocation from '../Location/AddLocation';
import AddMap from '../Location/AddMap';

export default function UserDetailsForm(){

    const [ enteredName, setEnteredName ] = useState('');
    const [ enteredAlias, setEnteredAlias ] = useState('');

    function submitHandler() {
        onSubmit({
            name: enteredName,
            alias: enteredAlias,
        });
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch( inputType ){
            case 'name':
                console.log('name', inputType, enteredValue)
                setEnteredName(enteredValue);
                break;
            case 'alias':
                setEnteredAlias(enteredValue);
                break;
        }
    }

    return(
        <View style={[{ ...FormStyling.formContainer, backgroundColor: 'pink', flex: 1}]}>
            <View>
                <FormInput label="Name (Not shown on profile)" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: Colors.LightAqua }}
                onChangeText={updateInputValueHandler.bind(this, 'name')}
                value={enteredName}
                isInvalid={undefined}
                placeholder={null}
                />
                <FormInput label="Alias" labelStyle={{ color: 'black' }} inputStyle={{ backgroundColor: Colors.LightAqua }}
                onChangeText={updateInputValueHandler.bind(this, 'alias')}
                value={enteredAlias}
                isInvalid={undefined}
                placeholder={null}
                />
                <PhotoPicker/>
                <AddLocation/>
                
                
                <Button title='Next 👉' onPress={undefined}/>
            </View>
            
            {/* Button that says next - links to other modal view that asks about who youre trying to find. e.g interested in men, women, all, how face they can be, age range */}
        </View>
    )
}