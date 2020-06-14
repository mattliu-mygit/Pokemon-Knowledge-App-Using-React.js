"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _AttributeSearch = _interopRequireDefault(require("./AttributeSearch"));

var _Pokemon = _interopRequireDefault(require("./Pokemon"));

var _correctPokemonCheck = _interopRequireDefault(require("../correct-pokemon-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// A function that retrieves a pokemon based on its number
const getPokemon = async pokeNum => {
  const pokemon = await _axios.default.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`); //.then(data => pokemon = data);

  return pokemon;
}; // The final results page that the player sees.


const Results = props => {
  const [attr, setAttr] = (0, _react.useState)('');
  const [val, setVal] = (0, _react.useState)('');
  let attribs = [attr, val]; // A function that sets attr to the attribute submitted from the AttributeSearch

  const onSubmitAttribute = attribute => {
    attribute = attribute.toLowerCase();
    setAttr(attribute);
  }; // A function that sets val the value submitted from the AttributeSearch


  const onSubmitValue = value => {
    value = value.toLowerCase();
    setVal(value);
  }; // Gets a list of Pokemon that have the attribute attr with the value val.


  const getPokeList = async () => {
    let pokemonList = [];
    attribs = [attr, val];

    for (let i = 1; i < 808; i++) {
      let pokemonData = await getPokemon(i);
      let pokemon = pokemonData.data;

      if ((0, _correctPokemonCheck.default)(pokemon, attribs, 'white') === 'green') {
        pokemonList.push(pokemon);
      }
    }

    props.addNewPokemon(pokemonList);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "results"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "score"
  }, "Your score is: ", props.score), /*#__PURE__*/_react.default.createElement("div", {
    className: "congrats"
  }, "Congrats!"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: // Calls on the new game function back in the App component.
    props.startNewGame,
    className: "playAgain"
  }, " Play Again "), /*#__PURE__*/_react.default.createElement("div", null, "or..."), /*#__PURE__*/_react.default.createElement("div", {
    className: "instructions"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Learn some new Pokemon facts below! Give an attribute(type, move, or weight) and a value (attribute, like '888' for 'weight', 'grass' for 'type', or 'rock-smash' for 'move'!"), /*#__PURE__*/_react.default.createElement("div", null, "When you're ready, press the 'Search for Pokemon' button to search PokeAPI for all the Pokemon that fit your critieria!"), /*#__PURE__*/_react.default.createElement("div", null, "Note that for moves of length 2, seperate them with a hyphen(for example 'rock-smash' for 'rock smash').")), /*#__PURE__*/_react.default.createElement("h3", {
    className: "attribute"
  }, "Attribute: ", attr), /*#__PURE__*/_react.default.createElement("h3", {
    className: "value"
  }, "Value: ", val), /*#__PURE__*/_react.default.createElement(_AttributeSearch.default, {
    onSubmitAttribute: onSubmitAttribute,
    onSubmitValue: onSubmitValue,
    onClick: getPokeList
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pokemon_list"
  }, props.pokeList.map(pokeList => /*#__PURE__*/_react.default.createElement(_Pokemon.default, _extends({
    key: pokeList.id
  }, pokeList, {
    attribute: attribs
  })))));
};

var _default = Results;
exports.default = _default;