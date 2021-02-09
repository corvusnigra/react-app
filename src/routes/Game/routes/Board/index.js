import s from './style.module.css';
import {useContext} from "react";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCardComponent";

const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);
    console.log(pokemonContext)
    // const handleClick = () => {
    //     themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
    // };
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    pokemonContext.pokemons.map(({isSelected,active, id,name, values, img, type}) => <PokemonCard
                        isActive={active}
                        key={id}
                        name={name}
                        values={values}
                        img={img}
                        id={id}
                        type={type}
                        minimize={true}
                        className={'card'}
                        isSelected={isSelected}
                    />)
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
