import { View, StyleSheet } from 'react-native';
import ZippersBackgroundText from "./ZippersBackgroundText";

export default function ZippersBackground({zIndex, backgroundColor, fontColor, textShadowColor}){
    return(
        <View style={[styles.zippersBackground, {backgroundColor, zIndex}]}>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
            <ZippersBackgroundText fontColor={fontColor} textShadowColor={textShadowColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    zippersBackground:{
        position: 'absolute',
    }
})