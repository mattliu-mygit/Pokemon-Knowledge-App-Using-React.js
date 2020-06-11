import React from 'react';

const Attribute = (props) => {
    return <h2>Guess a Pokemon with {props.attribute[0]}: {props.attribute[1]}</h2>;
}

export default Attribute;