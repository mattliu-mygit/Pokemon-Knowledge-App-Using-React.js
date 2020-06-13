import React, {useState} from 'react';
import axios from 'axios';

const PokeSearch = (props) => {
    let [name, setName] = useState('');
    let [invalidResponse, setInvalidResponse] = useState(false);
    let [duplicateFound, setDuplicateFound] = useState(false);

    const DuplicateException = (message) => {
        const error = new Error(message);
        return error;
    }

    let handleSubmit = async (event) => {
        name = name.toLowerCase();
        event.preventDefault();
        try {
            props.pokeList.forEach(pokemon => {if (name === pokemon.name) {throw new DuplicateException('Duplicate detected')}})
            try {
                const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                props.onSubmit(resp.data, props.attribute);
                setInvalidResponse(false);
                setDuplicateFound(false);
            }
            catch (InvalidException) {
                setInvalidResponse(true);
                setDuplicateFound(false);
            }
        }
        catch(DuplicateException) {
            setInvalidResponse(false);
            setDuplicateFound(true);
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