// Code that returns a color based on whether one of the Pokemon attributes match the chosen one.
const correct_pokemon_check = (pokemon, attribute, color) => {
    if (attribute[0] === 'weight') {
        const weight = parseInt(attribute[1]);
        // Determines if weights match within 50 grams of the target.
        if (pokemon.weight < weight + 50 && pokemon.weight > weight -50) {
            color = 'green';
        }
        else {             
            color = 'red';
        }
    }
    else {
        let attributeType;
        let BreakException = {};
        // Determines if types match
        if (attribute[0] === 'type') {
            attributeType = pokemon.types;
            try {
                attributeType.forEach(typeName => {
                    // If type matches, don't check anymore and break out of the forEach loop.
                    if (typeName.type.name === attribute[1]) {
                        color = 'green';
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
            //Determines if moves match.
            try {
                attributeType = pokemon.moves;
                attributeType.forEach(attack => {
                    // If moves matches, don't check anymore and break out of the forEach loop.
                    if (attack.move.name === attribute[1]) {
                        color = 'green';
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