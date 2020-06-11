import {useState, useEffect} from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

// A custom hook made for the game.

// Maybe add a static guesslist of correct pokemon. 

const UseGameState = (gameStart) => {
    const [pokeList, setPokeList] = useState([]);
    const [score, setScore] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [resultVisible, setResultVisible] = useState(false);

    // Fix this so that timer doesn't rerender the WHOLE page every tick. Timer component maybe?
    useEffect(()=> {
        if (secondsLeft > 0 && gameStart) {
            const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    });

    if (secondsLeft === 0 && resultVisible === false) {
        setResultVisible(true);
    }

    const addNewPokemon = (pokemon, attribute) => {
        let color = correct_pokemon_check(pokemon, attribute, 'white');
        if (color === 'green' && resultVisible == false) {
            setScore(score+1)
        }
        setPokeList([...pokeList, pokemon]);
    }

    return {pokeList, score, secondsLeft, resultVisible, setScore, setPokeList, addNewPokemon};
}
export default UseGameState;