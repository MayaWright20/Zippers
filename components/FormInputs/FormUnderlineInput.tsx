import React from "react";
import { TextInput,Text, View, StyleSheet } from 'react-native';

import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function FormUnderlineInput({ formUnderlineInputContainerStyle }){
    return(
        // <View style={[formUnderlineInputContainerStyle]}>
            <TextInput style={styles.formUnderlineInputContainer}/>
        // </View>
    )
}

const styles = StyleSheet.create({
    formUnderlineInputContainer: {
        width: WINDOW_HEIGHT / 20,
        height: WINDOW_HEIGHT / 20,
        backgroundColour: 'yellow',
        borderBottomColor: 'blue',
        borderBottomWidth: 3,
    }
})