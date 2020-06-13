import React, {useState} from 'react';
import axios from 'axios';
import {DuplicateException, InvalidException} from '../Exceptions';

// A custom hook that manages all the dynamically changing states of PokeSearch
const UsePokeSearch = () => {
    const [name, setName] = useState('');
    const [invalidResponse, setInvalidResponse] = useState(false);
    const [duplicateFound, setDuplicateFound] = useState(false);
    return {name, invalidResponse, duplicateFound, setName, setInvalidResponse, setDuplicateFound};
}

// The search and search bar implementation that appears during the playing phase screen.
const PokeSearch = (props) => {
    const {name, invalidResponse, duplicateFound, setName, setInvalidResponse, setDuplicateFound} = UsePokeSearch();

    // When the search is submited, this function runs.
    const handleSubmit = async (event) => {
        const nameValue = name.toLowerCase();
        event.preventDefault();
        try {
            // Goes through the current list of guessed Pokemon and checks to see if the pokemon is already guessed
            // If it's already guessed, an exception is thrown.
            props.pokeList.forEach(pokemon => {if (nameValue === pokemon.name) {throw DuplicateException;}})

            let resp;
            try {
            resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameValue}`);
            } catch(e) {
                // If the Pokemon guessed doesn't exist, an exception is thrown.
                throw InvalidException;
            }
            props.onSubmit(resp.data, props.attribute);
            setInvalidResponse(false);
            setDuplicateFound(false);
        }
        catch(error) {
            if (error.code === 'duplicate') {
                setInvalidResponse(false);
                setDuplicateFound(true);
            }
            else if (error.code === 'invalid'){
                setInvalidResponse(true);
                setDuplicateFound(false);
            }
        }
        setName('');
    }
    
    return <div>
        Search for pokemon here!
        <form onSubmit = {handleSubmit} className = 'submit_form'>
            <input className = 'submit_input'
            type = "text"
            value = {name}
            onChange = {event => setName(event.target.value)}
            placeholder = "Enter a Pokemon guess"
            required
            />
            {
            invalidResponse ?
                <div className = 'invalid_pokemon'>Invalid pokemon! Try again!</div>
            : null
            }
            {
            duplicateFound ?
                <div className = 'duplicate_pokemon'>Duplicate pokemon! Try again!</div>
            : null
            }
        </form>
    </div>
}

export default PokeSearch;