import {useRouteMatch, Route, Switch} from "react-router-dom"
import StartPage from "./Start";
import BoardPage from "./Board";
import FinishPage from "./Finish";
import {PokemonContext} from "../../../context/pokemonContext"
import {useState} from "react"

const GamePage = () => {
    const[selectedPokemons, setSelectedPokemons] = useState({});
    const[selectedPokemonsPlayer1, setselectedPokemonsPlayer1] = useState([]);
    const[selectedPokemonsPlayer2, setselectedPokemonsPlayer2] = useState([]);
    const[board, setboard] = useState([]);
    const match = useRouteMatch();
    const handleAddPokemon = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];
                return copyState;
            }

            return  {
                ...prevState,
                [key]: pokemon
            }

        })
    };
    const handleFinishPokemons = (board, pokemonsPlayer1, pokemonsPlayer2) => {
        console.log(board, pokemonsPlayer1, pokemonsPlayer2)
        setboard(board);
        setselectedPokemonsPlayer1(pokemonsPlayer1);
        setselectedPokemonsPlayer2(pokemonsPlayer2);
    };




    return (
        <PokemonContext.Provider value={{
            board: board,
            pokemonsPlayer1: selectedPokemonsPlayer1,
            pokemonsPlayer2: selectedPokemonsPlayer2,
            pokemons: selectedPokemons,
            onAddPokemon: handleAddPokemon,
            onFinishPokemons: handleFinishPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
