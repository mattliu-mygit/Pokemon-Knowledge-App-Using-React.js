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
        setAttr(attribute);
        console.log(attr);
        if (attr !== 'move' && attr !== 'type' && attr !== 'weight') {
            alert('Incorrect attribute name!');
        }
    }

    const onSubmitValue = (value) => {
        setVal(value);
        console.log(val);
        if (val !== '') {
            alert('Add a value!');
        }
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
        <div className = 'score'>Your score is: {props.score}!</div>
        <button onClick = {props.startNewGame}>Play Again </button>
        <h3>Attribute: {attr}</h3>     
        <h3>Value: {val}</h3>
        <AttributeSearch onSubmitAttribute = {onSubmitAttribute} onSubmitValue = {onSubmitValue} onClick = {getPokeList}/>
        <div>{props.pokeList.map(pokeList => <Pokemon key = {pokeList.id} {...pokeList} attribute = {attribs} />)}
        </div>
    </div>
}

export default Results;