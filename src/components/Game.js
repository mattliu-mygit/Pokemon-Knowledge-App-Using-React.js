//import React from 'react';
import React from 'react';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Score from './Score';
import Attribute from './Attribute'
import UseGameState from './UseGameStates';

const Game = (props) => {
    const {pokeList, score, secondsLeft, setScore, setPokeList, addNewPokemon} = UseGameState();
    const rerollCriteria = () => {
        props.randomizer();
        setPokeList([]);
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
                <GuessList pokeList = {pokeList} setScore = {setScore} score = {score} attribute = {props.attribute}/>
            </div>
            
            <div className = 'timer'>Time Remaining: {secondsLeft} </div>
            <button onClick = {rerollCriteria}> Reroll </button>
            <button onClick = {props.startNewGame}>Play Again </button>
        </div>
    );
  }
  export default Game;