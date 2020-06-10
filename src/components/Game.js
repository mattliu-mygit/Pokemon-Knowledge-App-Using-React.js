import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Score from './Score';
import Attribute from './Attribute'

const Game = (props) => {
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
    
    return (
        <div>
            <div className = 'random_attribute'> 
                <Attribute attribute = {props.attribute}/>
                
            </div>
            <div className = 'UI'>
                <div className = 'Result'>
                    <Score score = {score}/>
                </div>
                <PokeSearch onSubmit = {addNewPokemon}/>
                <GuessList pokeList = {pokeList} setScore = {setScore}/>
            </div>
            <div className = 'timer'>Time Remaining: {secondsLeft} </div>
            <button onClick = {props.startNewGame}> Play Again </button>
        </div>
    );
  }
  export default Game;