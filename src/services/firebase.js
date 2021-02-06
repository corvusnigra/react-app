import firebase from 'firebase/app'
import 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyD0JH4a5v_m_1y3HE4YOczy7T5lD0Wt-IY",
    authDomain: "pokemon-game-e8b10.firebaseapp.com",
    databaseURL: "https://pokemon-game-e8b10-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e8b10",
    storageBucket: "pokemon-game-e8b10.appspot.com",
    messagingSenderId: "200374006313",
    appId: "1:200374006313:web:adce03c0d9f22e5192e238"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();
export default database;
