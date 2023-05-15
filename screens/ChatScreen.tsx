import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZippersBackground from '../components/Background/ZippersBackground';
import ZippersButton from '../components/Buttons/ZippersButtons';
import { COLORS } from '../constants/COLORS';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {

    return (
        <View style={styles.chatScreenBackground}>
            <ZippersBackground fontColor={COLORS.YELLOW} textShadowColor={COLORS.PEACH} />
            <SafeAreaView>
                <ZippersButton />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    chatScreenBackground: {
        flex: 1,
        backgroundColor: COLORS.DARK_BLUE
    }
})