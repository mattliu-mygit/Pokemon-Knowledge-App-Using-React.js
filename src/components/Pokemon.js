import React from 'react';
import correct_pokemon_check from '../correct-pokemon-check';

//Pokemon info card with tabs?

const Pokemon = (props) => {
    const pokemon = props;
    const attribute = props.attribute;
    let attributeSet = '';
    let color = 'white'

    if (attribute[0] === 'weight') {
        attributeSet += pokemon.weight;
    }
    else {
        if (attribute[0] === 'move') {
            pokemon.moves.forEach(attacks => {
                attributeSet += attacks.move.name.toString() + '\n';
            });
        }
        if (attribute[0] === 'type') {
            pokemon.types.forEach(types => {
                attributeSet += types.type.name.toString() + '\n';
            });
        }
    }
    color = correct_pokemon_check(pokemon, attribute, color);
    return <div className = 'Pokemon' style = {{backgroundColor: color}}> 
        <img src = {pokemon.sprites.front_default} />
        <div className = "info"> 
            <div className = "name">{pokemon.species.name} </div>
            <div className = "attribute">{attribute[0]}: {attributeSet}</div>
        </div> 
    </div>
}

export default Pokemon;