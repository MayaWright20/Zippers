import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZippersBackgroundText from '../components/Background/ZipperBackgroundText';
import ZippersButton from '../components/Buttons/ZippersButtons';
import { Colors } from '../constants/Colors';

export default function ChatScreen(){
    
    return(
        <View style={styles.chatScreenBackground}>
            <ZippersButton position='absolute'/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
            <ZippersBackgroundText fontColor={ Colors.Yellow } textShadowColor={ Colors.Peach }/>
        </View>
    )
}

const styles = StyleSheet.create({
    chatScreenBackground:{
        flex: 1,
        backgroundColor: Colors.DarkBlue
    }
})