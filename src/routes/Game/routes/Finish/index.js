import {useContext, useEffect} from "react"
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCardComponent";

const FinishPage = () => {
    const {board, pokemonsPlayer1, pokemonsPlayer2, pokemons} = useContext(PokemonContext);
    const history = useHistory();
    const goTo = () => {
        history.push('/game')
    };


    return (
        <>
            <div className={s.flex}>
                <>
                    {
                        board.filter(card => card.player === 1).map(({id, name, values, img, type}) => <PokemonCard
                            className={s.card}
                            isActive={true}
                            name={name}
                            values={values}
                            img={img}
                            id={id}
                            type={type}
                        />)
                    }

                    { pokemonsPlayer1.length ? <PokemonCard
                        className={s.card}
                        isActive={true}
                        name={pokemonsPlayer1[0].name}
                        values={pokemonsPlayer1[0].values}
                        img={pokemonsPlayer1[0].img}
                        id={pokemonsPlayer1[0].id}
                        type={pokemonsPlayer1[0].type}
                    /> : null

                    }
                </>

            </div>


            <div>
                <button
                    onClick={goTo}>
                   End game
                </button>
            </div>

            <div className={s.flex}>
                <>
                    {
                        board.filter(card => card.player === 2).map(({id, name, values, img, type}) => <PokemonCard
                            className={s.card}
                            isActive={true}
                            name={name}
                            values={values}
                            img={img}
                            id={id}
                            type={type}
                        />)
                    }

                    { pokemonsPlayer2.length ? <PokemonCard
                        className={s.card}
                        isActive={true}
                        name={pokemonsPlayer2[0].name}
                        values={pokemonsPlayer2[0].values}
                        img={pokemonsPlayer2[0].img}
                        id={pokemonsPlayer2[0].id}
                        type={pokemonsPlayer2[0].type}
                    /> : null

                    }
                </>
            </div>
        </>


    );
};

export default FinishPage;
