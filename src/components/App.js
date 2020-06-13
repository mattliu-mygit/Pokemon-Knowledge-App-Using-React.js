import React, {useState} from 'react';
import Game from './Game'
import axios from 'axios';

// An app that tests your Pokemon knowledge!

// A custom hook that handles all the dynamically changing states.
const UseAppState = () => {
  const [gameId, setGameId] = useState(1);
  const [attribute, setAttribute] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  return {gameId, attribute, gameStart, setGameId, setAttribute, setGameStart}
}

// The app!
export function App() {
  const {gameId, attribute, gameStart, setGameId, setAttribute, setGameStart} = UseAppState();
  
  // Randomizes the chosen attribute to match for in the game.
  const RandomizeAttribute = async () => {

    // A number randomizing function.
    const randNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    // Gets a random attribute from the three in the list.
    const attributeList = ['weight', 'move', 'type'];
    const attributeName = attributeList[randNum(0, attributeList.length-1)];

    // Gets a random weight between 0 and 1000 grams.
    if (attributeName === 'weight') {
        setAttribute([attributeName, randNum(0, 1000)]);
    }
    else {
      // Non-weight related attributes handled differently than the weight attribute.
      let resp;
      if (attributeName === 'move') {
        // Gets a random move from 400 possible moves.
        resp = await axios.get(`https://pokeapi.co/api/v2/${attributeName}/${randNum(1, 400)}`);
      }
      else if (attributeName === 'type') {
        // Gets a random type from the 18 different types.
        resp = await axios.get(`https://pokeapi.co/api/v2/${attributeName}/${randNum(1, 18)}`);
      }
        const attributes = resp.data;
        const attributeLabel = attributes.name;
        setAttribute([attributeName, attributeLabel]);
    }
  }
  return (
    <div>
      <h1>A Pokemon Knowledge Test!</h1>
      <Game key = {gameId} startNewGame = {() => {
        /* A function that starts a new game used in the 'play again' button in the Results page.
          When starting a new game, randomizes the attribute and changes the game id so the entire game is
          replaced with a new iteration of the game. */
        RandomizeAttribute()
        return setGameId(gameId + 1);
      }} randomizer = {RandomizeAttribute} attribute = {attribute} gameStart = {gameStart} setGameStart = {setGameStart}/>
    </div>
  );
}