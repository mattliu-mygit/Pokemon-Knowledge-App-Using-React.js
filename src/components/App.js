import React, {useState} from 'react';
import PokeList from './PokeList';
import PokeSearch from './PokeSearch';

// An app that tests your Pokemon knowledge!

export function App() {
  let [pokeList, setPokeList] = useState([]);
  const addNewPokemon = (name) => {
      setPokeList([...pokeList, name]);
  }
  return (
    <div>
      <h1>A Pokemon Knowledge Test!</h1>
      <PokeSearch onSubmit = {addNewPokemon}/>
      <PokeList />
    </div>
  );
}
