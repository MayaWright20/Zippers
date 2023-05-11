import React, { useState } from 'react';
import { Button, View, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { WindowWidth } from '../../constants/Dimentions';
import { Colors } from '../../constants/Colors';

export default function PhotoPicker() {

    const [imageResults, setImageResults] = useState([]);

    const pickImage = async () => {

        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!results.canceled) {
            setImageResults(results.assets)
        }
    }

    return (
        <View>

            <Button title="Pick images from camera roll" onPress={pickImage} />
            <View style={[{ backgroundColor: Colors.LightAqua, padding: 5, borderRadius: 20, overflow:'hidden' }]}>
                {imageResults && <FlatList horizontal={true}  data={imageResults} renderItem={({ item }) => {
                    return <Image source={{ uri: item.uri }} style={[{ width: WindowWidth / 3, height: WindowWidth / 3, borderRadius: 20 }]} />;
                }} />}
            </View>
        </View>
    );
}