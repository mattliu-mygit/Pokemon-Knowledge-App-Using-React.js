import React from 'react';

const StartScreen = (props) => {
    return <button onClick = {() => {
        // Maybe a start screen instead of button.
        props.randomizer();
        props.setGameStart(true);
    }}>Start game</button>
}
export default StartScreen;