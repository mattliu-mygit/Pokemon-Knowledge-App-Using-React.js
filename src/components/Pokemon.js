import React from 'react';

const Pokemon = (props) => {
    const pokemon = props;
    return <div className = 'Pokemon'> 
        <img src = {pokemon.sprites.front_default} />
        <div className = "info"> 
            <div className = "name">{pokemon.species.name} </div>
            <div className = "attribute">Its Attribute comparison.</div>
        </div> 
    </div>
}

export default Pokemon;