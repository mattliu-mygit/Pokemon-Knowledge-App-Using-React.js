import React, {useState} from 'react';
import Game from './Game'
import axios from 'axios';

// An app that tests your Pokemon knowledge!

export function App() {
  const [gameId, setGameId] = useState(1);
  const [attribute, setAttribute] = useState([]);
  
  const RandomizeAttribute = async () => {
    const randNum =  (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const attributeList = ['weight', 'moves', 'types'];

    const attributeName = attributeList[randNum(0, attributeList.length)];
    if (attributeName === 'weight') {
        setAttribute([attributeName, randNum(0, 1000)]);
    }
    else if (attributeName === 'moves') {
        const resp = await axios.get(`https://pokeapi.co/api/v2/move/${randNum(1, 400)}`);
        const moveList = resp.data;
        const move = moveList.name;
        setAttribute([attributeName, move]);
    }
    else if (attributeName === 'types') {
        const resp = await axios.get(`https://pokeapi.co/api/v2/type/${randNum(1, 18)}`);
        const typeList = resp.data;
        const type = typeList.name;
        setAttribute([attributeName, type]);
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
