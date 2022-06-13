import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSrA2m-8ABlEFxNyRrG-5nUqOc2laa_WU",
    authDomain: "crm-vue-3.firebaseapp.com",
    projectId: "crm-vue-3",
    storageBucket: "crm-vue-3.appspot.com",
    messagingSenderId: "950867100267",
    appId: "1:950867100267:web:69883add5a8aae9bc0e72e"
}

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth }