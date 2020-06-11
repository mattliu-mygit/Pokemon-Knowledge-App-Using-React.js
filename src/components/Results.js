import React from 'react';

const HandleResult = (props) => {
    return <div className = 'results'>
        <div>Score: {props.score}</div>
        <button onClick = {props.startNewGame}>Play Again </button>
    </div>
}

export default HandleResult;