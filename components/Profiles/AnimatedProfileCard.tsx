import React, { useRef, useState } from 'react';
import { Animated, PanResponder, View, Text, StyleSheet, SafeAreaView, LayoutAnimation, UIManager } from 'react-native';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/DIMENSIONS';
import ZippersBackground from '../Background/ZippersBackground';

export default function AnimatedProfileCard({ data, renderProfileCard, onSwipeRight, onSwipeLeft, noMoreProfilesAvaliable }) {

    const pan = new Animated.ValueXY();
    const [indexState, setIndexState] = useState(0);
    const SWIPE_THRESHOLD = WINDOW_WIDTH / 2;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
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
    });

    function getProfileCardStyle() {

        const rotate = pan.x.interpolate({
            inputRange: [-WINDOW_WIDTH * 1.5, 0, WINDOW_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            transform: [{ rotate }, { translateX: pan.x }, { translateY: pan.y }]
        }
    }

    function resetPosition() {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, tension: 10, friction: 5, useNativeDriver: false }).start();
    }

    function forceSwipe(direction) {

        const xDirection = direction === 'right' ? WINDOW_WIDTH : -WINDOW_WIDTH;
        Animated.timing(pan, {
            toValue: { x: xDirection, y: 0 },
            duration: 250,
            useNativeDriver: false
        }).start(() => {
            onSwipeComplete(direction);
        })
    }

    function nextCardTransition(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.linear()
    }

    // function nextSetOfData(nextProps){
    //     if( nextProps.data !== data ){
    //         setIndexState(0)
    //     }
    // }

    function getNewSetOfData(){
        console.log('new set of data fetched');

        // nextSetOfData()
    }

    function onSwipeComplete(direction) {
        direction === 'right' ? onSwipeRight() : onSwipeLeft();
        
        setIndexState(indexState + 1);


        if( indexState === data.length -1 ){
            getNewSetOfData()
        }

        nextCardTransition()

    }


    

    

    function renderProfileCards() {

        if (indexState >= data.length) {
            return noMoreProfilesAvaliable();
        }

        return data.map((item, i) => {


            if (i < indexState) { return null }; // this is the code that needs to change for rewind functionality

            if (i === indexState && i !== 20) {
                return (
                    //card shown at the top 
                    <Animated.View
                        key={item.id}
                        style={[getProfileCardStyle(), styles.stackedCard]}
                        {...panResponder.panHandlers}>
                        {renderProfileCard(item)}
                    </Animated.View>
                )
            }
            return (
                // cards underneath the first card
                <View style={styles.stackedCard} key={item.id}>
                    
                    <View style={styles.frostedCardOverlay}>
                        <ZippersBackground/>
                    </View>
                    {renderProfileCard(item)}
                </View>
            )
        }).reverse()
    }
    return (
        <SafeAreaView>
            <Animated.View style={styles.stackedCard} key={data.id}>
                {renderProfileCards()}
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    stackedCard: {
        position: 'absolute',
        backgroundColor: 'blue'
    },
    frostedCardOverlay:{
        backgroundColor: 'green',
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        opacity: 0.5

    }
});