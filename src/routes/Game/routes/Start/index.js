import PokemonCard from "../../../../components/PokemonCardComponent";
import {useState, useEffect, useContext} from "react"
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/firebaseContext";

const newPokemon = {
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

const StartPage = () => {
    const pokemonContext = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext);
    const [pokemons, setPokemonState] = useState({});

    const history = useHistory();
    const goTo = () => {
        history.push('/game/board')
    };


    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemonState(pokemons)
        })
    }, []);


    const handleClickCad = (pokemonKey) => {
         pokemonContext.onAddPokemon({...pokemons[pokemonKey], isSelected: true, active : true});
         firebase.postPokemon(pokemonKey,
             {...pokemons[pokemonKey],
             active: pokemons[pokemonKey].active ? !pokemons[pokemonKey].active : true})
    };

    const handleClick = () => {
       firebase.addPokemon(newPokemon)
    };

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    add new pokemon
                </button>
                <button onClick={goTo}>
                    goTo
                </button>

            </div>
            <div className="flex">
                {
                    Object.entries(pokemons).map(([key, {isSelected,active, id,name, values, img, type}]) => <PokemonCard
                        isActive={active}
                        pokemonKey={key}
                        key={key}
                        name={name}
                        values={values}
                        img={img}
                        id={id}
                        type={type}
                        className={'root'}
                        isSelected={isSelected}
                        onClickCard={handleClickCad}
                    />)
                }
            </div>
        </>

    )
};

export default StartPage
