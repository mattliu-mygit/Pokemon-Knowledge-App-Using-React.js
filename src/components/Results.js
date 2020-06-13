import React, {useState} from 'react';
import axios from 'axios';
import AttributeSearch from './AttributeSearch';
import Pokemon from './Pokemon';
import correct_pokemon_check from '../correct-pokemon-check';

// A function that retrieves a pokemon based on its number
const getPokemon = async (pokeNum) => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);//.then(data => pokemon = data);
    return pokemon;
}

// The final results page that the player sees.
const Results = (props) => {
    const [attr, setAttr] = useState('');
    const [val, setVal] = useState('')
    let attribs = [attr, val];

    // A function that sets attr to the attribute submitted from the AttributeSearch
    const onSubmitAttribute = (attribute) => {
        attribute = attribute.toLowerCase();
        setAttr(attribute);
    }

    // A function that sets val the value submitted from the AttributeSearch
    const onSubmitValue = (value) => {
        value = value.toLowerCase();
        setVal(value);
    }

    // Gets a list of Pokemon that have the attribute attr with the value val.
    const getPokeList = async () => {
        let pokemonList = [];
        attribs = [attr, val];
        
        for (let i = 1; i < 808; i++) {
            let pokemonData = await getPokemon(i);
            let pokemon = pokemonData.data;
            if (correct_pokemon_check(pokemon, attribs, 'white') === 'green') {
                pokemonList.push(pokemon);
            }
        }
        props.addNewPokemon(pokemonList);
    }

    return <div className = 'results'>
        <div className = 'score'>Your score is: {props.score}</div>
        <div className = 'congrats'>Congrats!</div>
        <button onClick = {
            // Calls on the new game function back in the App component.
            props.startNewGame
            } className = 'playAgain'> Play Again </button>
        <div>or...</div>
        <div className = 'instructions'>
            <div>Learn some new Pokemon facts below! Give an attribute(type, move, or weight) and a value (attribute, like '888' for 'weight', 'grass' for 'type', or 'rock-smash' for 'move'!</div>
            <div>When you're ready, press the 'Search for Pokemon' button to search PokeAPI for all the Pokemon that fit your critieria!</div>
            <div>Note that for moves of length 2, seperate them with a hyphen(for example 'rock-smash' for 'rock smash').</div>
        </div>
        <h3 className = 'attribute'>Attribute: {attr}</h3>     
        <h3 className = 'value'>Value: {val}</h3>
        <AttributeSearch onSubmitAttribute = {onSubmitAttribute} onSubmitValue = {onSubmitValue} onClick = {getPokeList}/>
        <div className = 'pokemon_list'>{props.pokeList.map(pokeList => <Pokemon key = {pokeList.id} {...pokeList} attribute = {attribs} />)}
        </div>
    </div>
}

export default Results;