import {useState, useEffect} from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

// A custom hook made for the game that handles all dynamically changing states.
const UseGameState = (gameStart) => {
    const [pokeList, setPokeList] = useState([]);
    const [resultPokeList, setResultPokeList] = useState([]);
    const [score, setScore] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [rerollTimer, setRerollTimer] = useState(5);

    /* Handles the timers. When rendered, the timer is started. On timeout after a second, 
      the game is rerendered by calling setSecondsLeft and useEffect is called again, decrementing 
      secondsLeft by one more second, calling the timeOut again. This rerendering loops until
      seconds left is 0.*/
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

    // Function that adds a new Pokemon guess to the current list of Pokemon in the playing stage of the game.
    const addNewPokemon = (pokemon, attribute) => {
        // Checks to see if the Pokemon matches the current characteristics to match. If it matches and 
        // There is still time on the timer, score is invremented.
        let color = correct_pokemon_check(pokemon, attribute, 'white');
        if (color === 'green' && secondsLeft > 0) {
            setScore(score+1)
        }
        setPokeList([...pokeList, pokemon]);
    }

    // Sets the result Pokemon list for the specified filters determined in the results component.
    const addNewResultPokemon = (pokemon) => {
        setResultPokeList([...pokemon])
    }

    return {pokeList, score, secondsLeft, rerollTimer, resultPokeList, setScore, setPokeList, setRerollTimer, setResultPokeList, addNewPokemon, addNewResultPokemon};
}
export default UseGameState;