import { EmailAuthProvider } from " firebase/auth";

const credential = EmailAuthProvider.credential(email, password);

//to link email and phone number read below
// https://firebase.google.com/docs/auth/web/anonymous-auth?hl=en&authuser=0