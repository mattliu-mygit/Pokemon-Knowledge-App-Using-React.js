import React from 'react';
import GuessList from './GuessList';
import PokeSearch from './PokeSearch';
import Results from './Results';
import Attribute from './Attribute'
import UseGameState from './UseGameStates';
import StartScreen from './StartScreen';

// This is the code for a single instance of a game.
const Game = (props) => {
    const {pokeList, score, secondsLeft, rerollTimer, resultPokeList, setScore, setPokeList, setRerollTimer, setResultPokeList, addNewPokemon, addNewResultPokemon} = UseGameState(props.gameStart);
    
    // A function that rerolls a new attribute to match for.
    const reroll = () => {
        props.randomizer();
        setRerollTimer(5);
        setPokeList([]);
    }

    /* Below is the JSX that displays different screens for different stages of the 
      game (the start screen, playing screen, and result screen). */
    return (
        <div className = 'game_screen'>
            {
            // if the game is not started, start screen is shown.
            props.gameStart === false ?
                <StartScreen randomizer = {props.randomizer} setGameStart = {props.setGameStart}/>
            : // Otherwise, the screen moves on to the playing screen with the search, matching, and score keeping occurs.
            <div className = 'started'>
                {
                // If timer doesn't run out, we stay on the playing screen.
                secondsLeft !== 0 ?
                <div className = 'playing'>
                    <div className = 'random_attribute'> 
                        <Attribute attribute = {props.attribute}/>
                    </div> 
                    <div className = 'score'>Score: {score}</div>
                    <div className = 'timer'>Time Remaining: {secondsLeft} </div>
                    <PokeSearch onSubmit = {addNewPokemon} attribute = {props.attribute} pokeList = {pokeList}/>
                    <GuessList pokeList = {pokeList} setScore = {setScore} score = {score} attribute = {props.attribute}/>
                    <div className = 'reroll_button'>
                    {
                        // If the reroll timer is at 0 seconds, the reroll button can be played.
                        rerollTimer === 0 ? <button onClick = {reroll}> Reroll </button> : <button> {rerollTimer} </button>
                    }
                    </div>
                </div>
                : // If timer runs out, result screen is displayed
                <div className = 'result'>
                    <Results score = {score} startNewGame = {props.startNewGame} pokeList = {resultPokeList} setPokeList = {setResultPokeList} addNewPokemon = {addNewResultPokemon}/>
                </div>
                }
            </div>
            }
        </div>
    );
  }
  export default Game;