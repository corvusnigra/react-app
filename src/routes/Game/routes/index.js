import {useRouteMatch, Route, Switch} from "react-router-dom"
import StartPage from "./Start";
import BoardPage from "./Board";
import FinishPage from "./Finish";
import {PokemonContext} from "../../../context/pokemonContext"
import {useState} from "react"

const GamePage = () => {
    const[pokemons, addPokemon] = useState([]);
    const match = useRouteMatch();
    const handleAddPokemon = (pokemon) => {
        addPokemon(prevState => {
            console.log(pokemon,prevState)
            prevState.push(pokemon);
            return [...prevState]
        })
        console.log(pokemons)
    };
    return (
        <PokemonContext.Provider value={{
            pokemons: pokemons,
            onAddPokemon: handleAddPokemon

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
