import React, { useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, View, FlatList, SafeAreaView, StyleSheet, Text, Pressable, ImageBackground, Image, Animated } from 'react-native';

import { Colors } from '../../constants/Colors';
import ZippersButton from '../../components/Buttons/ZippersButtons';
import Paginator from '../../components/Paginator';
import ActionButton from '../../components/Buttons/ActionButton';
import ZippersBackgroundText from '../../components/Background/ZipperBackgroundText';

import { WindowWidth, WindowHeight } from '../../constants/Dimentions';
import TopScreenGif from '../../components/Gifs/TopScreenGif';

export default function AuthScreen({ navigation }) {

    type ItemData = {
        id: string;
        title: string;
        authScreenBackgroundColor: string | null,
        buttonColor: string,
        authScreenBackgroundImage: string | null,
        topScreenGif: string
    };

    const scrollX = useRef(new Animated.Value(0)).current;

    const DATA: ItemData[] = [
        {
            id: 'AuthScreen 1',
            title: 'EXPLORE',
            authScreenBackgroundColor: Colors.DarkBlue,
            buttonColor: Colors.Yellow,
            authScreenBackgroundImage: null,
            topScreenGif: 'https://media.giphy.com/media/3oKIPePUxr83vL7Bsc/giphy.gif',
        },
        {
            id: 'AuthScreen 2',
            title: 'CHAT',
            authScreenBackgroundColor: 'transparent',
            buttonColor: Colors.LightBlue,
            authScreenBackgroundImage: 'https://media.giphy.com/media/3ohhwxVhsthRqlWHq8/giphy.gif',
            topScreenGif: 'https://media.giphy.com/media/ZE5qSFzQW80tm14AZe/giphy.gif'
        },
        {
            id: 'AuthScreen 3',
            title: '',
            authScreenBackgroundColor: Colors.LightPink,
            buttonColor: Colors.DarkAqua,
            authScreenBackgroundImage: null,
            topScreenGif: 'https://media.giphy.com/media/MXRkaIFXc7k9npyNhL/giphy.gif'
        },
        {
            id: 'AuthScreen 4',
            title: '',
            authScreenBackgroundColor: Colors.MintGreen,
            buttonColor: Colors.Peach,
            authScreenBackgroundImage: null,
            topScreenGif: 'https://media.giphy.com/media/IpbGcovWT1i21j1S4r/giphy.gif'
        },
    ];

    type ItemProps = {
        item: ItemData;
        onPress: () => void;
        authScreenBackgroundImage: string | null;
        authScreenBackgroundColor: string;
        buttonColor: string;
        topScreenGif: string | null;
    };

    function SignupScreenHandler() {
        navigation.navigate('SignupScreen')
    }

    function LoginScreenHandler() {
        navigation.navigate('LoginScreen')
    }

    const Item = ({ item, authScreenBackgroundColor, buttonColor, topScreenGif, authScreenBackgroundImage }: ItemProps) => (
        <ImageBackground source={item.authScreenBackgroundImage ? { uri: item.authScreenBackgroundImage } : null} resizeMode="cover" style={styles.container}>
            <View style={[styles.container, { backgroundColor: item.authScreenBackgroundColor, paddingBottom: 40 }]}>

                <SafeAreaView style={styles.container}>
                    <View style={styles.authContentContainer}>
                        <View>
                            <ZippersButton position='relative' />
                            <TopScreenGif source={item.topScreenGif ? { uri: item.topScreenGif } : null} />


                        </View>

                        <View>
                            <ZippersBackgroundText />
                            <Paginator data={DATA} scrollX={scrollX} />
                            <ActionButton buttonColor={item.buttonColor} onPress={SignupScreenHandler} title="Sign up" />
                            <ActionButton buttonColor={item.buttonColor} onPress={LoginScreenHandler} title="I already have an account" />
                        </View>
                    </View>
                </SafeAreaView>

            </View>

        </ImageBackground>
    );

    const renderItem = ({ item }: { item: ItemData }) => {
        return (
            <Item
                item={item} onPress={function (): void {
                    throw new Error('Function not implemented.');
                }} authScreenBackgroundImage={null} authScreenBackgroundColor={''} buttonColor={''} topScreenGif={null} />
        );
    };

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            snapToOffsets={[]}
            snapToAlignment={"center"}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WindowWidth,
        height: WindowHeight,
        justifyContent: 'center',
    },
    authContentContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    topScreenGifWrapper: {
        width: WindowWidth / 2.5,
        height: WindowHeight / 6.5,
        zIndex: 11
    },
    topScreenGif: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    backgroundText: {
        fontSize: WindowWidth / 4,
        fontWeight: '600',
        textAlign: 'center',
    },
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
});