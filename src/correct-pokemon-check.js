const correct_pokemon_check = (pokemon, attribute, color) => {
    if (attribute[0] === 'weight') {
        const weight = parseInt(attribute[1]);
        if (pokemon.weight < weight + 20 && pokemon.weight > weight -20) {
            color = 'green';
            console.log('compared');
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
    return color;
}

export default correct_pokemon_check;