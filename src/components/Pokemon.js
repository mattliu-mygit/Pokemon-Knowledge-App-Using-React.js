import React from 'react';

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

    

    // console.log('move length is ' + pokemon.moves.length);
    // for (let i = 0; i < pokemon.moves.length; i++) {
    //     moveSet += pokemon.moves[i].move.name.toString();
    // }

    
        if (attribute[0] === 'weight') {
            const weight = attribute[1];
            if (pokemon.weight < weight + 20 && pokemon.weight > weight -20) {
                color = 'green';
            }
            else {
                color = 'red';
            }
        }
        else {
            let attributeType;
            let BreakException = {};
            if (attribute[0] === 'type') {
                attributeType = pokemon.types;
                try {
                    attributeType.forEach(attack => {
                        if (attack.type.name === attribute[1]) {
                            color = 'green';
                            console.log('compared');
                            throw BreakException;
                        }
                        color = 'red';
                    });
                }
                catch(e) {
                    if (e !== BreakException) throw e;
                }
            }
            else {
                try {
                    attributeType = pokemon.moves;
                    attributeType.forEach(attack => {
                        if (attack.move.name === attribute[1]) {
                            color = 'green';
                            console.log('compared');
                            throw BreakException;
                        }
                        color = 'red';
                    });
                }
                catch(e) {
                    if (e !== BreakException) throw e;
                }
            }
            
        }
    
    return <div className = 'Pokemon' style = {{backgroundColor: color}}> 
        <img src = {pokemon.sprites.front_default} />
        <div className = "info"> 
            <div className = "name">{pokemon.species.name} </div>
            <div className = "attribute">{attribute[0]}: {attributeSet}</div>
        </div> 
    </div>
}

export default Pokemon;