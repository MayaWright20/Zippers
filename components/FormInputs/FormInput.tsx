import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormInput({editable, maxLength, labelStyle,inputStyle, label, onChangeText,  keyboardType, isInvalid, secure, value, placeholder}){
    return(
        <View style={styles.formInputContainer}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            <TextInput editable={editable} underlineColorAndroid='transparent' style={[styles.input, inputStyle]} value={value} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder}  keyboardType={keyboardType} isInvalid={isInvalid} secure={secure}/>
        </View>
    )
}

const styles = StyleSheet.create({
    formInputContainer:{
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label:{
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        padding: 6,
        borderRadius: 6, 
        fontSize: 18
    }

})