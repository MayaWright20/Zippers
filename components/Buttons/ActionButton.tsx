import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function ActionButton({ onPress, style, buttonColor, buttonTitle, title}) {
    return (
        <View style={[styles.buttonWrapper, { backgroundColor: buttonColor }]}>
        <Pressable onPress={onPress} style={style}>
            <Text style={styles.buttonTitle}>
                { title }
            </Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        margin: 10,
        padding: 20,
        backgroundColor: 'yellow',
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2
    },
    buttonTitle: {
        textAlign: 'center'
    }
})