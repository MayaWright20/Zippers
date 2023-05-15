import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import { WINDOW_WIDTH  } from '../../constants/DIMENSIONS';

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
        width: WINDOW_WIDTH / 10,
        height: WINDOW_WIDTH / 10,
        borderRadius: WINDOW_WIDTH,
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