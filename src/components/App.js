import React, {useState} from 'react';
import Game from './Game'
import axios from 'axios';

// An app that tests your Pokemon knowledge!

export function App() {
  const [gameId, setGameId] = useState(1);
  const [attribute, setAttribute] = useState([]);
  
  const RandomizeAttribute = async () => {
    const randNum =  (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const attributeList = ['weight', 'move', 'type'];

    const attributeName = attributeList[randNum(0, attributeList.length)];
    if (attributeName === 'weight') {
        setAttribute([attributeName, randNum(0, 1000)]);
    }
    else {
      let resp;
      if (attributeName === 'move') {
        resp = await axios.get(`https://pokeapi.co/api/v2/${attributeName}/${randNum(1, 400)}`);
      }
      else {
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
        RandomizeAttribute();
        return setGameId(gameId + 1);
        }
      } attribute = {attribute}/>
    </div>
  );
}
