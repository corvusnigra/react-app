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


class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsOnce = async ()=> {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    };

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon)
    };

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref(`pokemons/${newKey}`).set(data).then(()=> cb)
    };

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot)=> {
            cb(snapshot.val())
        })
    }

}



export default Firebase;
