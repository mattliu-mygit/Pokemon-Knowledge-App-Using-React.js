import {useState, useEffect} from 'react';

// A custom hook made for the game.

const UseGameState = () => {
    const [pokeList, setPokeList] = useState([]);
    const [score, setScore] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(60);

    useEffect(()=> {
        if (secondsLeft > 0) {
            const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    });

    const addNewPokemon = (name) => {
        setPokeList([...pokeList, name]);
    }
    return {pokeList, score, secondsLeft, setScore, setPokeList, addNewPokemon};
}
export default UseGameState;