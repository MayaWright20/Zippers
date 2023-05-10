import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Colors } from "../../constants/Colors";

export default function ZippersButton({position}){

    return(
        <View style={[styles.zippersButtonWrapper, {position: position}]}>
            <Text style={styles.zippersButton}>ZIPPERS</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    zippersButtonWrapper: {
        zIndex: 10,
        width: '30%',
        alignSelf: 'center',
        top: 5,
        borderRadius: 60,
        backgroundColor: Colors.LightAqua,
    },
    zippersButton: {
        color: Colors.DarkBlue,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 2,
        marginVertical: 4,
        borderRadius: 60,
    }
});