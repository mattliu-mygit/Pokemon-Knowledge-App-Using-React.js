import React from 'react';

// A small component that displays the characteristics to match for.
const Attribute = (props) => {
    return <h2 className = 'guess_message'>Guess a Pokemon with the {props.attribute[0]}: {props.attribute[1]}</h2>;
}

export default Attribute;