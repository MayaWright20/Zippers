import React, { useRef, useState } from 'react';
import { Animated, PanResponder, View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { WindowWidth } from '../../constants/Dimentions';

export default function AnimatedProfileCard({ data, renderProfileCard }) {

    const [indexState, setIndexState] = useState(0);


    const SWIPE_THRESHOLD = WindowWidth / 2;
    const pan = new Animated.ValueXY();


    function forceSwipe(direction) {
        const xDirection = direction === 'right' ? WindowWidth : -WindowWidth;
        Animated.timing(pan, {
            toValue: { x: xDirection, y: 0 },
            duration: 250
        }).start(() => {
            onSwipeComplete(direction);
        })
    }

    function onSwipeComplete(direction) {
        // direction === 'right'? onSwipeRight(item) : onSwipeLeft(item);
        setIndexState(indexState+1);

        // resetPosition()
    }



    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: () => {

            let panx = Number(JSON.parse((JSON.stringify(pan.x.valueOf()))));

            if (panx > SWIPE_THRESHOLD) {
                forceSwipe('right');
            } else if (panx < -SWIPE_THRESHOLD) {
                forceSwipe('left');
            } else {
                resetPosition();
            }
        },
    })


    function getProfileCardStyle() {

        const rotate = pan.x.interpolate({
            inputRange: [-WindowWidth * 1.5, 0, WindowWidth * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            transform: [{ rotate }, { translateX: pan.x }, { translateY: pan.y }]
        }
    }

    function resetPosition() {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, tension: 10, friction: 5, useNativeDriver: false }).start();
    }


    function renderProfileCards() {
        return data.map((item, i) => {

            if (i < indexState) { return null }; // this is the code that needs to change for rewind functionality

            if (i === indexState) {
                return (
                    <Animated.View
                        key={item.key}
                        style={getProfileCardStyle()}
                        {...panResponder.panHandlers}>
                        {renderProfileCard(item)}
                    </Animated.View>
                )
            }
            return renderProfileCard(item)
        })
    }
    return (
        <View>
            {renderProfileCards()}
        </View>
    )
}