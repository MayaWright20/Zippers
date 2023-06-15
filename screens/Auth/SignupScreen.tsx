import { useState, useContext } from 'react';
import { Alert, View, Text, Modal, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/Background/LoadingOverlay';
import UserDetailsForm from '../../components/Profiles/UserDetailsForm';
import { FORM_STYLING } from '../../constants/FORM_STYLING';
// import COLORS from '../../constants/COLORS';

import { AuthContext } from '../../store/auth-context';
import { createUser } from '../../utils/auth';
import { COLORS } from '../../constants/COLORS';
import BackButton from '../../components/Buttons/BackButton';
import { getDocs } from 'firebase/firestore';
import { collection, addDoc, doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from '../../firebase/config'

export default function SignupScreen() {

    const [modalVisible, setModalVisible] = useState(false);

    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext);

    function showModal(){
        setModalVisible(true)
    }


    async function signupHandler() {

        

        // try {
            
        //     console.log('add to firestore');
        //     const docRef = await addDoc(collection(db, "userDetails"), {
        //         first: "Ada",
        //         last: "Lovelace",
        //         born: 1815
        //     });
        //     console.log("Document written with ID:", docRef.id);
        //     console.log("Document written with ID:")
        // } catch (e) {
        //     console.error("Error adding document:", e);
        // }



        // getCities()
        // async function getCities() {
        //     const citiesCol = collection(db, 'cities');
        //     const citySnapshot = await getDocs(citiesCol);
        //     const cityList = citySnapshot.docs.map(doc => doc.data());
        //     console.log(cityList)
        //     return cityList;
        // }




        // app.auth().createUserWithEmailAndPassword(email, password)
        // .then((response) =>{
        //     const uid = response.user.uid;
        //     const data = {
        //         id: uid,
        //         email,
        //     };

        //     const usersRef = app.firestore().collection('users');

        //     usersRef.doc(uid).set(data).then(()=>{
        //         // setModalVisible(true);
        //         console.log('kkkkk')
        //     }).catch((error)=>{
        //         alert(error)
        //     })
        // })
    }
    // async function signupHandler({ email, password }) {
    //     // setModalVisible(true)

    //     firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((response) => {
    //         const uid = response.user.uid
    //         const data = {
    //             id: uid,
    //             email,
    //         };
    //         const usersRef = firebase.firestore().collection('users')
    //         usersRef
    //             .doc(uid)
    //             .set(data)
    //             .then(() => {
    //                 setModalVisible(true)
    //                 console.log("set modal visible true ")
    //             })
    //             .catch((error) => {
    //                 alert(error)
    //             });
    //     })
    //     .catch((error) => {
    //         alert(error)







    // setIsAuthenticating(true)
    // try {
    //     const token = await createUser(email, password)
    //     authCtx.authenticate(token);



    //     //navigate to a page that will ask for details - already have age from sign up form 
    //     // navigation.navigate('UserProfileScreen')

    // } catch (error) {
    //     Alert.alert('Authentication failed', 'Please check credentials or try again later');
    //     setIsAuthenticating(false)
    // }
    // }

    if (isAuthenticating) {
        return <LoadingOverlay backgroundColor={COLORS.LIGHT_PINK} color={COLORS.LIGHT_AQUA} />
    }

    function backHandler() {
        setModalVisible(!modalVisible)
    }

    const navigation = useNavigation();
    function navTo(){
        setModalVisible(false);
        navigation.navigate('TabNavigator', { screen: 'Profile' });
    }

    return (
        <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: COLORS.LIGHT_PINK }]}>
            <AuthContent onAuthenticate={signupHandler} isLogin={undefined} showModal={showModal} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={(()=>{
                //     Alert.alert('Modal has been closed.');
                //     setModalVisible(!modalVisible);
                // })}
            >
                <View style={[{ ...FORM_STYLING.formContainer, backgroundColor: COLORS.LIGHT_PINK }]}>
                    {/* No back button because it submits the firestore again <BackButton onPress={backHandler} /> */} 
                    <UserDetailsForm navTo={navTo} />
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