import React from 'react';
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/DIMENSIONS';

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
        top: WINDOW_HEIGHT /20,
        left: WINDOW_WIDTH / 20,
    },
    BackButtonText:{
        color: 'black',
        fontSize: 14,
        fontWeight: '400'

    }
});