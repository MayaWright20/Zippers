import { View, StyleSheet } from 'react-native';
import ZippersBackgroundText from "./ZippersBackgroundText";

export default function ZippersBackground({ opacity, backgroundColor, fontColor, textShadowColor}){
    return(
        <View style={[styles.zippersBackground, {backgroundColor, opacity}]}>
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
        width: '100%',
        height: '100%',
    }
})