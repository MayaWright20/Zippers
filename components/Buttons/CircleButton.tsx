import React from 'react';
import { Pressable, View, Text, StyleSheet, Dimensions } from 'react-native';

import { WindowWidth  } from '../../constants/Dimentions';

export default function CircleButton({ emoji, backgroundColor, borderColor, onPress }){

    return(
        <Pressable onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor, borderColor: borderColor }]}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{emoji}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WindowWidth / 10,
        height: WindowWidth / 10,
        borderRadius: WindowWidth,
        alignContent: 'center',
        justifyContent:'center',
        overflow: 'hidden',
        borderWidth: 1,
        margin: 2
    },
    wrapper:{
    },
    text:{
        textAlign: 'center',
        fontSize: 25,
    }
});