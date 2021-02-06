import PokemonCard from "../../components/PokemonCardComponent";
import {useState, useEffect} from "react"
import database from '../../services/firebase'


const newPokemon =  {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
    }
};


const GamePage = () => {
    const [pokemons, setPokemonState] = useState({});

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
            setPokemonState(snapshot.val())
        });
    }, []);


    const handleClickCad = (pokemonKey) => {
        database.ref(`pokemons/${pokemonKey}`).set({...pokemons[pokemonKey], active: pokemons[pokemonKey].active ? !pokemons[pokemonKey].active : true});
    };

    const handleClick = () => {
        const newKey = database.ref().child('pokemons').push().key;
        database.ref(`pokemons/${newKey}`).set(newPokemon);
    };

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    add new pokemon
                </button>
            </div>
            <div className="flex">
                {
                    Object.entries(pokemons).map(([key, {active, id,name, values, img, type}]) => <PokemonCard
                        isActive={active}
                        pokemonKey={key}
                        key={key}
                        name={name}
                        values={values}
                        img={img}
                        id={id}
                        type={type}
                        onClickCard={handleClickCad}
                    />)
                }
            </div>
        </>

    )
};

export default GamePage
