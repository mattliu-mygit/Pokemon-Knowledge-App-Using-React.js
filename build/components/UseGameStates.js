"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _correctPokemonCheck = _interopRequireDefault(require("../correct-pokemon-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A custom hook made for the game that handles all dynamically changing states.
const UseGameState = gameStart => {
  const [pokeList, setPokeList] = (0, _react.useState)([]);
  const [resultPokeList, setResultPokeList] = (0, _react.useState)([]);
  const [score, setScore] = (0, _react.useState)(0);
  const [secondsLeft, setSecondsLeft] = (0, _react.useState)(60);
  const [rerollTimer, setRerollTimer] = (0, _react.useState)(5);
  /* Handles the timers. When rendered, the timer is started. On timeout after a second, 
    the game is rerendered by calling setSecondsLeft and useEffect is called again, decrementing 
    secondsLeft by one more second, calling the timeOut again. This rerendering loops until
    seconds left is 0.*/

  (0, _react.useEffect)(() => {
    if (secondsLeft > 0 && gameStart) {
      const timerId = setTimeout(() => {
        if (rerollTimer > 0) {
          setRerollTimer(rerollTimer - 1);
        }

        return setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }); // Function that adds a new Pokemon guess to the current list of Pokemon in the playing stage of the game.

  const addNewPokemon = (pokemon, attribute) => {
    // Checks to see if the Pokemon matches the current characteristics to match. If it matches and 
    // There is still time on the timer, score is invremented.
    let color = (0, _correctPokemonCheck.default)(pokemon, attribute, 'white');

    if (color === 'green' && secondsLeft > 0) {
      setScore(score + 1);
    }

    setPokeList([...pokeList, pokemon]);
  }; // Sets the result Pokemon list for the specified filters determined in the results component.


  const addNewResultPokemon = pokemon => {
    setResultPokeList([...pokemon]);
  };

  return {
    pokeList,
    score,
    secondsLeft,
    rerollTimer,
    resultPokeList,
    setScore,
    setPokeList,
    setRerollTimer,
    setResultPokeList,
    addNewPokemon,
    addNewResultPokemon
  };
};

var _default = UseGameState;
exports.default = _default;