import React from 'react';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Results from './Results';
import Attribute from './Attribute'
import UseGameState from './UseGameStates';
import StartScreen from './StartScreen';

// Add error message 

const Game = (props) => {
    const {pokeList, score, secondsLeft, resultVisible, setScore, setPokeList, addNewPokemon} = UseGameState(props.gameStart);
    
    const reroll = () => {
        props.randomizer();
        setPokeList([]);
    }
    return (
        <div className = 'game_screen'>
            {
            props.gameStart === false ?
                <StartScreen randomizer = {props.randomizer} setGameStart = {props.setGameStart}/>
            : <div className = 'started'>
                {
                secondsLeft !== 0 ?
                <div className = 'playing'>
                    <div className = 'random_attribute'> 
                        <Attribute attribute = {props.attribute}/>
                    </div> 

                    <div>Score: {score}</div>
                    <div className = 'timer'>Time Remaining: {secondsLeft} </div>
                    <PokeSearch onSubmit = {addNewPokemon} attribute = {props.attribute}/>
                    <GuessList pokeList = {pokeList} setScore = {setScore} score = {score} attribute = {props.attribute}/>
                    <button onClick = {reroll}> Reroll </button>
                </div>
                : <div className = 'result'>
                    <Results score = {score} startNewGame = {props.startNewGame} resultVisible = {resultVisible}/>
                </div>
                }
            </div>
            }
        </div>
    );
  }
  export default Game;