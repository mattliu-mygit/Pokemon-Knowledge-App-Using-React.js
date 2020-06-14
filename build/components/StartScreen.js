"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The start screen that the user first sees when opening the app.
const StartScreen = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "description"
  }, "A Pokemon knowledge quiz game made with React.js and the PokeAPI, the Restful Pokemon API, developed by Matthew Liu and Kevin Liu."), /*#__PURE__*/_react.default.createElement("div", {
    className: "instructions"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Test your Pokemon knowledge! In 60 seconds, try to match as many Pokemon to the characteristic thrown atcha! If your characteristic is too hard, feel free to reroll a new characteristic to test! Don't worry, you keep your score, even after rerolling! Be aware of the 5 second reroll timer huehuehue!"), /*#__PURE__*/_react.default.createElement("div", null, "Once you finish your game, have some fun giving the API some attributes to match in the results page!"), /*#__PURE__*/_react.default.createElement("div", null, "Gotta answer 'em all!")), /*#__PURE__*/_react.default.createElement("button", {
    className: "start_game_button",
    onClick: () => {
      props.randomizer();
      props.setGameStart(true);
    }
  }, "Start game"));
};

var _default = StartScreen;
exports.default = _default;