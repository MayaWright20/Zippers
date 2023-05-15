import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { WINDOW_HEIGHT } from '../../constants/DIMENSIONS';
import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';

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
        width: WINDOW_WIDTH / 2.5,
        height: WINDOW_HEIGHT / 6.5,
        zIndex: 11
    },
    topScreenGif:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
})
