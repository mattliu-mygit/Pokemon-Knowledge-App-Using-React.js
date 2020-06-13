import React, { useState } from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

const Pokemon = (props) => {
    const [buttonPressed, setButtonPressed] = useState(1);
    const pokemon = props;
    const attribute = props.attribute;
    let moveList = [];
    let typeList = [];
    let color = 'white'

    // Goes through all the types of a Pokemon and puts it into an array.
    pokemon.types.forEach(types => {
        typeList = [...typeList, types.type.name]//+= types.type.name.toString() + '\n';
    });

    // Goes through all the moves of a Pokemon and puts it into an array.
    pokemon.moves.forEach(moves => {
        moveList = [...moveList, moves.move.name]//+= moves.move.name.toString() + '\n';
    });
    
    // Determines background color of the Pokemon based on whether its attributes matches the chosen one.
    color = correct_pokemon_check(pokemon, attribute, color);

    return <div className = 'Pokemon' style = {{backgroundColor: color}}> 
        <img src = {pokemon.sprites.front_default} />
        <div className = 'info'> 
            <div className = 'name'>{pokemon.species.name.toUpperCase()} </div>
            <div className = 'attribute display'>{
                // Tabs that show different Pokemon information based on whichever one pressed.
                buttonPressed === 3 ? 
                    <div className = 'weight'>{pokemon.weight}</div>
                : buttonPressed === 2 ? // Displays an array of move divs.
                    <div className = 'moves'>{moveList.map(move => <p key = {move.id}>{move}</p>)}</div>
                : <div className = 'types'>{typeList.map(type => <p key = {type.id}>{type}</p>)}</div> // Displys an array of type divs.
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