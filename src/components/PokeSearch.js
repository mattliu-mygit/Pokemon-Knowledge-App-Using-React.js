import React, {useState} from 'react';
import axios from 'axios';

const PokeSearch = (props) => {
    let [name, setName] = useState('')
    let handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://pokeapi.co/api/v2/${name}`);
        props.onSubmit(resp.data);
        setName('');
    }
    return <div>
        Search for pokemon here!
        <form onSubmit = {handleSubmit}>hullo</form>
    </div>
}

export default PokeSearch;