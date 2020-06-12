import React, { useState } from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

//Pokemon info card with tabs?

const Pokemon = (props) => {
    const [buttonPressed, setButtonPressed] = useState(1);
    const pokemon = props;
    const attribute = props.attribute;
    let moveList = '';
    let typeList = ''
    let color = 'white'

    pokemon.types.forEach(types => {
        typeList += types.type.name.toString() + '\n';
    });

    pokemon.moves.forEach(moves => {
        moveList += moves.move.name.toString() + '\n';
    });
    color = correct_pokemon_check(pokemon, attribute, color);
    return <div className = 'Pokemon' style = {{backgroundColor: color}}> 
        <img src = {pokemon.sprites.front_default} />
        <div className = 'info'> 
            <div className = 'name'>{pokemon.species.name.toUpperCase()} </div>
            <div className = 'attribute display'>{
                buttonPressed === 3 ? 
                    <div className = 'weight'>{pokemon.weight}</div>
                : buttonPressed === 2 ?
                    <div className = 'moves'>{moveList}</div>
                : <div className = 'types'>{typeList}</div>
            }</div>
            <div className = 'button tabs'>
                <button onClick = {() => {setButtonPressed(1);}}>Types</button>
                <button onClick = {() => {setButtonPressed(2);}}>Moves</button>
                <button onClick = {() => {setButtonPressed(3);}}>Weight</button>
            </div>
        </div> 
    </div>
}

export default Pokemon;