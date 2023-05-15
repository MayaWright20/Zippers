import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { COLORS } from "../../constants/COLORS";

export default function ZippersButton({position}){

    return(
        <View style={[styles.zippersButtonWrapper]}>
            <Text style={styles.zippersButton}>ZIPPERS</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    zippersButtonWrapper: {
        zIndex: 10,
        width: '30%',
        alignSelf: 'center',
        position:'relative',
        top: 5,
        borderRadius: 60,
        backgroundColor: COLORS.LIGHT_AQUA,
    },
    zippersButton: {
        color: COLORS.DARK_BLUE,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 2,
        marginVertical: 4,
        borderRadius: 60,
    }
});