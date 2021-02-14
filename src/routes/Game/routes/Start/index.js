import PokemonCard from "../../../../components/PokemonCardComponent";
import {useState, useEffect, useContext} from "react"
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/firebaseContext";
import s from './style.module.css'



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
        });

        return () => firebase.offPokemonSoket();
    }, []);


    const handleChangeActive = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonContext.onAddPokemon(key, pokemon)
         setPokemonState(prevState => ({
             ...prevState,
             [key]: {
                 ...prevState[key],
                 selected: !prevState[key].selected
             }
         }))
    };


    return (
        <>
            <div style={{padding: '40px 0'}}>
                <button
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                    onClick={goTo}>
                    Start game
                </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {selected, id,name, values, img, type}]) => <PokemonCard
                        className={s.card}
                        isActive={true}
                        pokemonKey={key}
                        key={key}
                        name={name}
                        values={values}
                        img={img}
                        id={id}
                        type={type}
                        isSelected={selected}
                        onClickCard={() => {
                            if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                                handleChangeActive(key)
                            }
                        } }
                    />)
                }
            </div>
        </>

    )
};

export default StartPage
