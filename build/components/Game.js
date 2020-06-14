"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GuessList = _interopRequireDefault(require("./GuessList"));

var _PokeSearch = _interopRequireDefault(require("./PokeSearch"));

var _Results = _interopRequireDefault(require("./Results"));

var _Attribute = _interopRequireDefault(require("./Attribute"));

var _UseGameStates = _interopRequireDefault(require("./UseGameStates"));

var _StartScreen = _interopRequireDefault(require("./StartScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is the code for a single instance of a game.
const Game = props => {
  const {
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
  } = (0, _UseGameStates.default)(props.gameStart); // A function that rerolls a new attribute to match for.

  const reroll = () => {
    props.randomizer();
    setRerollTimer(5);
    setPokeList([]);
  };
  /* Below is the JSX that displays different screens for different stages of the 
    game (the start screen, playing screen, and result screen). */


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "game_screen"
  }, // if the game is not started, start screen is shown.
  props.gameStart === false ? /*#__PURE__*/_react.default.createElement(_StartScreen.default, {
    randomizer: props.randomizer,
    setGameStart: props.setGameStart
  }) :
  /*#__PURE__*/
  // Otherwise, the screen moves on to the playing screen with the search, matching, and score keeping occurs.
  _react.default.createElement("div", {
    className: "started"
  }, // If timer doesn't run out, we stay on the playing screen.
  secondsLeft !== 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "playing"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "random_attribute"
  }, /*#__PURE__*/_react.default.createElement(_Attribute.default, {
    attribute: props.attribute
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "score"
  }, "Score: ", score), /*#__PURE__*/_react.default.createElement("div", {
    className: "timer"
  }, "Time Remaining: ", secondsLeft, " "), /*#__PURE__*/_react.default.createElement(_PokeSearch.default, {
    onSubmit: addNewPokemon,
    attribute: props.attribute,
    pokeList: pokeList
  }), /*#__PURE__*/_react.default.createElement(_GuessList.default, {
    pokeList: pokeList,
    setScore: setScore,
    score: score,
    attribute: props.attribute
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "reroll_button"
  }, // If the reroll timer is at 0 seconds, the reroll button can be played.
  rerollTimer === 0 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: reroll
  }, " Reroll ") : /*#__PURE__*/_react.default.createElement("button", null, " ", rerollTimer, " "))) :
  /*#__PURE__*/
  // If timer runs out, result screen is displayed
  _react.default.createElement("div", {
    className: "result"
  }, /*#__PURE__*/_react.default.createElement(_Results.default, {
    score: score,
    startNewGame: props.startNewGame,
    pokeList: resultPokeList,
    setPokeList: setResultPokeList,
    addNewPokemon: addNewResultPokemon
  }))));
};

var _default = Game;
exports.default = _default;