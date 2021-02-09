import {useContext} from "react"
import {PokemonContext} from "../../../../context/pokemonContext";

const FinishPage = () => {
    // const themeContext = useContext(PokemonContext);
    // console.log(themeContext)
    // const handleClick = () => {
    //   themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
    // };
    return (
        <div>
          <h1>FinishPage</h1>
          {/*<button onClick={handleClick}>test</button>*/}
        </div>
    );
};

export default FinishPage;
