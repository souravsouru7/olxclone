import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA0aqXO85G32y_HHvBrzZMjugs_CY2EiRc",
    authDomain: "olxcloneapp-1813f.firebaseapp.com",
    projectId: "olxcloneapp-1813f",
    storageBucket: "olxcloneapp-1813f.appspot.com",
    messagingSenderId: "843373669056",
    appId: "1:843373669056:web:ffaa9bf49e82af5af35b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;