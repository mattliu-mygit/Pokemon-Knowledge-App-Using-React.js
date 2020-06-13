import {useState, useEffect} from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

// A custom hook made for the game.

// Maybe add a static guesslist of correct pokemon. 

const UseGameState = (gameStart) => {
    const [pokeList, setPokeList] = useState([]);
    const [resultPokeList, setResultPokeList] = useState([]);
    const [score, setScore] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [rerollTimer, setRerollTimer] = useState(5);

    // Fix this so that timer doesn't rerender the WHOLE page every tick. Timer component maybe?
    useEffect(()=> {
        if (secondsLeft > 0 && gameStart) {
            const timerId = setTimeout(() => {
                if (rerollTimer > 0) {
                    setRerollTimer(rerollTimer - 1);
                }
                return setSecondsLeft(secondsLeft - 1);}, 1000);
            return () => clearTimeout(timerId);
        }
    });

    const addNewPokemon = (pokemon, attribute) => {
        let color = correct_pokemon_check(pokemon, attribute, 'white');
        if (color === 'green' && secondsLeft > 0) {
            setScore(score+1)
        }
        setPokeList([...pokeList, pokemon]);
    }

    const addNewResultPokemon = (pokemon) => {
        setResultPokeList([...pokemon])
    }

    return {pokeList, score, secondsLeft, rerollTimer, resultPokeList, setScore, setPokeList, setRerollTimer, setResultPokeList, addNewPokemon, addNewResultPokemon};
}
export default UseGameState;