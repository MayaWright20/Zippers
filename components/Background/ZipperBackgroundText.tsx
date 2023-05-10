import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { WindowWidth } from '../../constants/Dimentions';

export default function ZippersBackgroundText({ fontColor, textShadowColor }){
    
    return(
        <Text style={[styles.backgroundText, {color: fontColor, textShadowColor: textShadowColor}]}>
            ZIPPERS
        </Text>
    )
};

const styles = StyleSheet.create({
    backgroundText: {
        fontSize: WindowWidth / 4,
        fontWeight: '600',
        textAlign: 'center',
        textShadowRadius: 10,
    },
});