import React from 'react';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Score from './Score';
import Attribute from './Attribute'
import UseGameState from './UseGameStates';

// Add error message 

const Game = (props) => {
    const {pokeList, score, secondsLeft, resultVisible, setScore, setPokeList, addNewPokemon} = UseGameState(props.gameStart);
    
    const reroll = () => {
        props.randomizer();
        setPokeList([]);
    }
    return (
        <div>
            <div className = 'random_attribute'> 
                <Attribute attribute = {props.attribute}/>
                
            </div>
            <div className = 'UI'>
                {resultVisible ? 
                <div className = 'Result'>
                    <Score score = {score}/>
                </div> : 
                    <div>Score: {props.score}</div>
                }
                <PokeSearch onSubmit = {addNewPokemon} attribute = {props.attribute}/>
                <GuessList pokeList = {pokeList} setScore = {setScore} score = {score} attribute = {props.attribute}/>
            </div>
            
            <div className = 'timer'>Time Remaining: {secondsLeft} </div>
            <button onClick = {reroll}> Reroll </button>
            {
                // Maybe a start screen here. for play again maybe a play again result screen
                props.attribute.length === 0 ? <button onClick = {() => {
                    props.randomizer();
                    props.setGameStart(true);
                }}>Start game</button> : <button onClick = {props.startNewGame}>Play Again </button>
            }
            
        </div>
    );
  }
  export default Game;