import React, {useState} from 'react';
import axios from 'axios';
import AttributeSearch from './AttributeSearch';
import Pokemon from './Pokemon';
import correct_pokemon_check from '../correct-pokemon-check';

const getPokemon = async (pokeNum) => {
    let pokemon;
    let var11 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);//.then(data => pokemon = data);
    console.log('pokemon is', pokemon);
    console.log('var11 is ', var11)
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
    }

    const onSubmitValue = (value) => {
        setVal(value);
        console.log(val);
    }

    const getPokeList = async () => {
        let pokemonList = []
        attribs = [attr, val];
        if (attr === 'type') {
            for (let i = 1; i < 808; i++) {
                let pokemonData = await getPokemon(i);
                let pokemon = pokemonData.data;
                console.log('poke is', pokemon);
                console.log('attribute is ', attribs);
                console.log('check is', correct_pokemon_check(pokemon, attribs, 'white'))
                if (correct_pokemon_check(pokemon, attribs, 'white') === 'green') {
                    console.log('this happened')
                    pokemonList.push(pokemon);
                }
            }
        }
        else if (attr === 'weight') {
            for (let i = 0; i < 808; i++) {
                const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

                // if (resp.data.weight < val.parseInt() + 20 && resp.data.weight > val.parseInt() - 20) {
                //     setPokeList([...pokeList, resp.data])
                // }
            }
        }
        else if (attr === 'move') {
            for (let i = 0; i < 808; i++) {
                const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                // if (resp.data.weight < val.parseInt() + 20 && resp.data.weight > val.parseInt() - 20) {
                //     setPokeList([...pokeList, resp.data])
                // }
            }
        }
        else {
            alert('Incorrect attribute name!');
        }
        props.addNewPokemon(pokemonList);
    }
    console.log('pokelist is ', props.pokeList);
    return <div className = 'results'>
        <div className = 'score'>Your score is: {props.score}!</div>
        <button onClick = {props.startNewGame}>Play Again </button>
        <AttributeSearch onSubmitAttribute = {onSubmitAttribute} onSubmitValue = {onSubmitValue} onClick = {getPokeList}/>
        <div>{props.pokeList.map(pokeList => <Pokemon key = {pokeList.id} {...pokeList} attribute = {attribs} />)}
        </div>
    </div>
}

export default Results;