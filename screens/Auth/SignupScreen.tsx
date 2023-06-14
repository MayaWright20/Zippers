import { useState, useContext } from 'react';
import { Alert, View, Text, Modal, StyleSheet, BackHandler } from 'react-native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';
import UserDetailsForm from '../../components/Profiles/UserDetailsForm';
import { FORM_STYLING } from '../../constants/FORM_STYLING';
// import COLORS from '../../constants/COLORS';

import { AuthContext } from '../../store/auth-context';
import { createUser } from '../../utils/auth';
import { COLORS } from '../../constants/COLORS';
import BackButton from '../../components/Buttons/BackButton';

export default function SignupScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext);

    async function signupHandler({ email, password }) {
        setModalVisible(true)
        // setIsAuthenticating(true)
        // try {
        //     // const token = await createUser(email, password)
        //     // authCtx.authenticate(token);
            


        //     //navigate to a page that will ask for details - already have age from sign up form 
        //     // navigation.navigate('UserProfileScreen')

        // } catch (error) {
        //     Alert.alert('Authentication failed', 'Please check credentials or try again later');
        //     setIsAuthenticating(false)
        // }
    }

    if (isAuthenticating) {
        return <LoadingOverlay backgroundColor={COLORS.LIGHT_PINK} color={COLORS.LIGHT_AQUA} />
    }

    function backHandler(){
        setModalVisible(!modalVisible)
    }

    return (
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: COLORS.LIGHT_PINK }]}>
            <AuthContent onAuthenticate={signupHandler} />

            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     setModalVisible(!modalVisible);
                // }}>
                >
                    <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: COLORS.LIGHT_PINK }]}>
                        <BackButton onPress={backHandler}/>
                        <UserDetailsForm/>
                    </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    }
})