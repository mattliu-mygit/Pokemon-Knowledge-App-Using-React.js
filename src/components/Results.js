import React, {useState} from 'react';
import axios from 'axios';
import AttributeSearch from './AttributeSearch';
import Pokemon from './Pokemon';
import correct_pokemon_check from '../correct-pokemon-check';

const getPokemon = async (pokeNum) => {
    let var11 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);//.then(data => pokemon = data);
    return var11;
}

const Results = (props) => {
    const [attr, setAttr] = useState('');
    const [val, setVal] = useState('')
    //const [attribs, setAttribs] = useState([]);
    let attribs = [attr, val];

    const onSubmitAttribute = (attribute) => {
        attribute = attribute.toLowerCase();
        setAttr(attribute);
    }

    const onSubmitValue = (value) => {
        value = value.toLowerCase();
        setVal(value);
    }

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
        <button onClick = {props.startNewGame} className = 'playAgain'> Play Again </button>
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