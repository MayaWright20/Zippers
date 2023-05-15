import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { COLORS } from "../../constants/COLORS";

export default function PillButton({navigation}){

    return(
        <View style={styles.pillButtonWrapper}>
            <Text style={styles.pillButton}>{title}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    pillButtonWrapper: {
        alignSelf: 'center',
    },
    pillButton: {
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 2,
        marginVertical: 4,
        borderRadius: 60,
    }
});