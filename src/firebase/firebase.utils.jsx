// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3NVpHA9j92IvpOtun9vNYz_bTlwuKRNU",
    authDomain: "ebuy-61fca.firebaseapp.com",
    projectId: "ebuy-61fca",
    storageBucket: "ebuy-61fca.appspot.com",
    messagingSenderId: "781329631589",
    appId: "1:781329631589:web:f77d7236da3ad01931398c",
    measurementId: "G-ZRTL3PTH5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const firestore = getFirestore(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;