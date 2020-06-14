"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _Exceptions = require("../Exceptions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// A custom hook that manages all the dynamically changing states of PokeSearch
const UsePokeSearch = () => {
  const [name, setName] = (0, _react.useState)('');
  const [invalidResponse, setInvalidResponse] = (0, _react.useState)(false);
  const [duplicateFound, setDuplicateFound] = (0, _react.useState)(false);
  return {
    name,
    invalidResponse,
    duplicateFound,
    setName,
    setInvalidResponse,
    setDuplicateFound
  };
}; // The search and search bar implementation that appears during the playing phase screen.


const PokeSearch = props => {
  const {
    name,
    invalidResponse,
    duplicateFound,
    setName,
    setInvalidResponse,
    setDuplicateFound
  } = UsePokeSearch(); // When the search is submited, this function runs.

  const handleSubmit = async event => {
    const nameValue = name.toLowerCase();
    event.preventDefault();

    try {
      // Goes through the current list of guessed Pokemon and checks to see if the pokemon is already guessed
      // If it's already guessed, an exception is thrown.
      props.pokeList.forEach(pokemon => {
        if (nameValue === pokemon.name) {
          throw _Exceptions.DuplicateException;
        }
      });
      let resp;

      try {
        resp = await _axios.default.get(`https://pokeapi.co/api/v2/pokemon/${nameValue}`);
      } catch (e) {
        // If the Pokemon guessed doesn't exist, an exception is thrown.
        throw _Exceptions.InvalidException;
      }

      props.onSubmit(resp.data, props.attribute);
      setInvalidResponse(false);
      setDuplicateFound(false);
    } catch (error) {
      if (error.code === 'duplicate') {
        setInvalidResponse(false);
        setDuplicateFound(true);
      } else if (error.code === 'invalid') {
        setInvalidResponse(true);
        setDuplicateFound(false);
      }
    }

    setName('');
  };

  return /*#__PURE__*/_react.default.createElement("div", null, "Search for pokemon here!", /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: "submit_form"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "submit_input",
    type: "text",
    value: name,
    onChange: event => setName(event.target.value),
    placeholder: "Enter a Pokemon guess",
    required: true
  }), invalidResponse ? /*#__PURE__*/_react.default.createElement("div", {
    className: "invalid_pokemon"
  }, "Invalid pokemon! Try again!") : null, duplicateFound ? /*#__PURE__*/_react.default.createElement("div", {
    className: "duplicate_pokemon"
  }, "Duplicate pokemon! Try again!") : null));
};

var _default = PokeSearch;
exports.default = _default;