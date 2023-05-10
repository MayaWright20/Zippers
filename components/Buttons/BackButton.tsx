import React from 'react';
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import { WindowWidth, WindowHeight } from '../../constants/Dimentions';

export default function BackButton({onPress}){

    return(
        <Pressable onPress={onPress} style={styles.BackButtonWrapper}>
            <Text style={styles.BackButtonText}>
                👈 BACK
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    BackButtonWrapper: {
        position: 'absolute',
        padding: 5,
        top: WindowHeight /20,
        left: WindowWidth / 20,
    },
    BackButtonText:{
        color: 'black',
        fontSize: 14,
        fontWeight: '400'

    }
});