import React, {useState} from 'react';
import axios from 'axios';

const PokeSearch = (props) => {
    let [name, setName] = useState('');
    let [invalidResponse, setInvalidResponse] = useState(false);

    let handleSubmit = async (event) => {
        name = name.toLowerCase();
        event.preventDefault();
        try {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            props.onSubmit(resp.data, props.attribute);
            setInvalidResponse(false);
        }
        catch (e) {
            setInvalidResponse(true);
        }
        setName('');
    }
    
    return <div>
        Search for pokemon here!
        <form onSubmit = {handleSubmit}>
            <input 
            type = "text"
            value = {name}
            onChange = {event => setName(event.target.value)}
            placeholder = "Enter a Pokemon guess"
            required
            />
            <button> Guess! </button>
            {
            invalidResponse ?
                <div>Invalid pokemon! Try again!</div>
            : null
            }
        </form>
    </div>
}

export default PokeSearch;