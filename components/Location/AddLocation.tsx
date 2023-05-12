import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

import { getAddress } from '../../utils/location';

export default function AddLocation({ updateUserLocation, updateUserCity }) {

    const [ location, setLocation ] = useState(null);
    const [ city, setCity ] = useState('');


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);


    function addLocation() {
        
        let lat;
        let long;

        if (location) {
            lat = JSON.stringify(location.coords.latitude);
            long = JSON.stringify(location.coords.longitude);
        }

        async function handleLocation() {
            const currentPosisiton = await getAddress(lat, long);
            setCity(currentPosisiton);
            updateUserLocation([lat, long])
            updateUserCity(currentPosisiton);
        }

        handleLocation();
        
    }
    

    return (
        <View>
            <Button title="Add Location 🌍" onPress={addLocation} />
            <Text>{city}</Text>
        </View>
    );
}
