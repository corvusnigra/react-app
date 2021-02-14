import s from './style.module.css';
import {useContext, useEffect, useState} from "react";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCardComponent";
import {useHistory} from 'react-router-dom'
import PlayerBoard from "./component/PlayerBoard";
import {FireBaseContext} from "../../../../context/firebaseContext";

const BoardPage = () => {
    const {pokemons, onFinishPokemons} = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext);
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue'
        }))
    });
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setStep] = useState(0);
    const history = useHistory();

    console.log(player2)
    if(!Object.keys(pokemons).length === 0) {
        history.replace('/game')
    }

    const counterWin = (board, player1, player2) => {
        let playerCount1 = player1.length;
        let playerCount2 = player2.length;

        board.forEach(item => {
            if (item.card.possession === 'red') {
                playerCount2++
            }
            if (item.card.possession === 'blue') {
                playerCount1++
            }
        })

        return [playerCount1, playerCount2]
    }

    useEffect(async () => {
        const boardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const board = await boardResponce.json();
        setBoard(board.data);

        const player2Responce = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const plaer2Request = await player2Responce.json();
        setPlayer2(() => {
            return plaer2Request.data.map(item => ({
                ...item,
                possession: 'red'
            }))
        });
    }, []);


    const handleClickBoard = async (position) => {
      console.log(position)
        console.log(choiceCard)

        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            }

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();
            setBoard(request.data)

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setStep(prevState => {
                const count =prevState + 1;
                return count;
            })
        }
    };

    useEffect(() => {

        if(steps === 9) {
            onFinishPokemons(board.map(item => item.card),player1, player2)
            console.log(board)
           const [count1, count2] = counterWin(board, player1, player2);
           if (count1 > count1) {
               alert('WIN')
               firebase.addPokemon(player2[0])
           } else if (count1 < count2) {
               alert('LOSE')
           } else {
               alert('DRAW')
           }
            history.replace('/game/finish')
        }
    }, [steps])

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card)=> setChoiceCard(card)}
                />
            </div>
            <div className={s.board}>
                {
                    board.map((item) => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={()=> !item.card && handleClickBoard(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} isActive minimize/>
                            }
                        </div>
                        )
                    )
                }
            </div>
            <div className={s.playerTwo}>
               <PlayerBoard
                   player={2}
                   cards={player2}
                   onClickCard={(card)=> setChoiceCard(card)}
               />
            </div>
        </div>
    );
};

export default BoardPage;
