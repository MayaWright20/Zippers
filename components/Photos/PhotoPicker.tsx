import React, { useState } from 'react';
import { Button, View, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';
import { COLORS } from '../../constants/COLORS';

export default function PhotoPicker({updateUserPhotos}) {

    const [ imageResults, setImageResults ] = useState([]);

    const pickImage = async () => {

        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!results.canceled) {
            setImageResults(results.assets)
            updateUserPhotos(results.assets)
        }
    }

    return (
        <View>
            <Button title="Add Photos 📸" onPress={pickImage} />
            <View style={[{ backgroundColor: COLORS.LIGHT_AQUA, padding: 5, borderRadius: 20, overflow:'hidden' }]}>
                {imageResults && <FlatList horizontal={true}  data={imageResults} renderItem={({ item }) => {
                    return <Image source={{ uri: item.uri }} style={[{ width: WINDOW_WIDTH / 3, height: WINDOW_WIDTH / 3, borderRadius: 20 }]} />;
                }} />}
            </View>
        </View>
    );
}