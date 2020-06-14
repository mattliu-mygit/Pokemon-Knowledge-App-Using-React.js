"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pokemon = _interopRequireDefault(require("./Pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Maps the array of guessed Pokemon as a list on the game page.
const GuessList = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PokeSearch"
  }, "Your guesses:", /*#__PURE__*/_react.default.createElement("div", {
    className: "guesses"
  }, props.pokeList.map(pokeList => /*#__PURE__*/_react.default.createElement(_Pokemon.default, _extends({
    key: pokeList.id
  }, pokeList, {
    attribute: props.attribute
  })))));
};

var _default = GuessList;
exports.default = _default;