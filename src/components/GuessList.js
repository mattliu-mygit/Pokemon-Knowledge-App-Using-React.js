import React from 'react';
import Pokemon from './Pokemon';

// Maps the array of guessed Pokemon as a list on the game page.
const GuessList = (props) => {
    return <div className = 'PokeSearch'>
        Your guesses:
        <div className = 'guesses'>
            {props.pokeList.map(pokeList => <Pokemon key = {pokeList.id} {...pokeList} attribute = {props.attribute} />)}
        </div>
    </div>
}

export default GuessList;
