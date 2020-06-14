"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;

var _react = _interopRequireWildcard(require("react"));

var _Game = _interopRequireDefault(require("./Game"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// An app that tests your Pokemon knowledge!
// A custom hook that handles all the dynamically changing states.
const UseAppState = () => {
  const [gameId, setGameId] = (0, _react.useState)(1);
  const [attribute, setAttribute] = (0, _react.useState)([]);
  const [gameStart, setGameStart] = (0, _react.useState)(false);
  return {
    gameId,
    attribute,
    gameStart,
    setGameId,
    setAttribute,
    setGameStart
  };
}; // The app!


function App() {
  const {
    gameId,
    attribute,
    gameStart,
    setGameId,
    setAttribute,
    setGameStart
  } = UseAppState(); // Randomizes the chosen attribute to match for in the game.

  const RandomizeAttribute = async () => {
    // A number randomizing function.
    const randNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1)); // Gets a random attribute from the three in the list.


    const attributeList = ['weight', 'move', 'type'];
    const attributeName = attributeList[randNum(0, attributeList.length - 1)]; // Gets a random weight between 0 and 1000 grams.

    if (attributeName === 'weight') {
      setAttribute([attributeName, randNum(0, 1000)]);
    } else {
      // Non-weight related attributes handled differently than the weight attribute.
      let resp;

      if (attributeName === 'move') {
        // Gets a random move from 400 possible moves.
        resp = await _axios.default.get(`https://pokeapi.co/api/v2/${attributeName}/${randNum(1, 400)}`);
      } else if (attributeName === 'type') {
        // Gets a random type from the 18 different types.
        resp = await _axios.default.get(`https://pokeapi.co/api/v2/${attributeName}/${randNum(1, 18)}`);
      }

      const attributes = resp.data;
      const attributeLabel = attributes.name;
      setAttribute([attributeName, attributeLabel]);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "A Pokemon Knowledge Test!"), /*#__PURE__*/_react.default.createElement(_Game.default, {
    key: gameId,
    startNewGame: () => {
      /* A function that starts a new game used in the 'play again' button in the Results page.
        When starting a new game, randomizes the attribute and changes the game id so the entire game is
        replaced with a new iteration of the game. */
      RandomizeAttribute();
      return setGameId(gameId + 1);
    },
    randomizer: RandomizeAttribute,
    attribute: attribute,
    gameStart: gameStart,
    setGameStart: setGameStart
  }));
}