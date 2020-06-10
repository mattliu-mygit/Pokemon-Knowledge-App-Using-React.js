import React, {useState} from 'react';
import axios from 'axios';

const PokeSearch = (props) => {
    let [name, setName] = useState('')
    let handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        props.onSubmit(resp.data);
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
        </form>
    </div>
}

export default PokeSearch;