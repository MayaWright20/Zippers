import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { WindowHeight } from '../../constants/Dimentions';
import { WindowWidth } from '../../constants/Dimentions';

export default function TopScreenGif({source}){
    return(
        <View style={styles.topScreenGifWrapper}>
            <Image style={styles.topScreenGif} source={source}/>
        </View>
    )
}

const styles = StyleSheet.create({
    topScreenGifWrapper:{
        alignSelf: 'center',
        width: WindowWidth / 2.5,
        height: WindowHeight / 6.5,
        zIndex: 11
    },
    topScreenGif:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
})
