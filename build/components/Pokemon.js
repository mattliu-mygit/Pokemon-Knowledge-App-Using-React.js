"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _correctPokemonCheck = _interopRequireDefault(require("../correct-pokemon-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Pokemon = props => {
  const [buttonPressed, setButtonPressed] = (0, _react.useState)(1);
  const pokemon = props;
  const attribute = props.attribute;
  let moveList = [];
  let typeList = [];
  let color = 'white'; // Goes through all the types of a Pokemon and puts it into an array.

  pokemon.types.forEach(types => {
    typeList = [...typeList, types.type.name]; //+= types.type.name.toString() + '\n';
  }); // Goes through all the moves of a Pokemon and puts it into an array.

  pokemon.moves.forEach(moves => {
    moveList = [...moveList, moves.move.name]; //+= moves.move.name.toString() + '\n';
  }); // Determines background color of the Pokemon based on whether its attributes matches the chosen one.

  color = (0, _correctPokemonCheck.default)(pokemon, attribute, color);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Pokemon",
    style: {
      backgroundColor: color
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: pokemon.sprites.front_default
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name"
  }, pokemon.species.name.toUpperCase(), " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "attribute display"
  }, // Tabs that show different Pokemon information based on whichever one pressed.
  buttonPressed === 3 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "weight"
  }, pokemon.weight) : buttonPressed === 2 ?
  /*#__PURE__*/
  // Displays an array of move divs.
  _react.default.createElement("div", {
    className: "moves"
  }, moveList.map(move => /*#__PURE__*/_react.default.createElement("p", {
    key: move.id
  }, move))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "types"
  }, typeList.map(type => /*#__PURE__*/_react.default.createElement("p", {
    key: type.id
  }, type))) // Displys an array of type divs.
  ), /*#__PURE__*/_react.default.createElement("div", {
    className: "button tabs"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      setButtonPressed(1);
    }
  }, "Types"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      setButtonPressed(2);
    }
  }, "Moves"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      setButtonPressed(3);
    }
  }, "Weight"))));
};

var _default = Pokemon;
exports.default = _default;