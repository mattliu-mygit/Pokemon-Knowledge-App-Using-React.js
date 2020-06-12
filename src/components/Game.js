import React from 'react';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Results from './Results';
import Attribute from './Attribute'
import UseGameState from './UseGameStates';
import StartScreen from './StartScreen';

// Add error message 

const Game = (props) => {
    const {pokeList, score, secondsLeft, rerollTimer, resultPokeList, setScore, setPokeList, setRerollTimer, setResultPokeList, addNewPokemon, addNewResultPokemon} = UseGameState(props.gameStart);
    // Need to make an attribute list and pokemon list
    const reroll = () => {
        props.randomizer();
        setRerollTimer(5);
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

                    <div className = 'score'>Score: {score}</div>
                    <div className = 'timer'>Time Remaining: {secondsLeft} </div>
                    <PokeSearch onSubmit = {addNewPokemon} attribute = {props.attribute}/>
                    <GuessList pokeList = {pokeList} setScore = {setScore} score = {score} attribute = {props.attribute}/>
                    <div className = 'reroll_button'>
                    {
                        rerollTimer === 0 ? <button onClick = {reroll}> Reroll </button> : <button> {rerollTimer} </button>
                    }
                    </div>
                </div>
                : <div className = 'result'>
                    <Results score = {score} startNewGame = {props.startNewGame} pokeList = {resultPokeList} setPokeList = {setResultPokeList} addNewPokemon = {addNewResultPokemon}/>
                </div>
                }
            </div>
            }
        </div>
    );
  }
  export default Game;