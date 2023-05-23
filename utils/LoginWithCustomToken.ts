import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth();

signInWithCustomToken(auth, token)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("USER LOGIN WITH CUSTOM TOKEN ",user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR CODE AND ERROR MESSAGE LOGIN WITH CUSTOM TOKEN", errorCode, " error Message", errorMessage)
    });