import React from 'react';
import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native';

export default function Paginator({data, scrollX}){


    const { width } = useWindowDimensions();

    return(
        <View style={styles.paginatorWrapper}>
            {data.map((_, i) =>{

                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [7, 7, 7],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 0.7, 0.3],
                    extrapolate: 'clamp'
                })



                return <Animated.View style={[styles.paginator, {width: dotWidth, opacity}]} key={i.toString()}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    paginatorWrapper: {
        flexDirection: 'row',
        height: 20,
        alignSelf: 'center'
    },
    paginator: {
        height: 7,
        borderRadius: 5,
        backgroundColor: 'black',
        marginHorizontal: 8,
    }
});