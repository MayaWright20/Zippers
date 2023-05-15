import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadingOverlay({backgroundColor, color}){
    return(
        <View style={[styles.container, {backgroundColor}]}>
            <ActivityIndicator size='large' color={color}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})