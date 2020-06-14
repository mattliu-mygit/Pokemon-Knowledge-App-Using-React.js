"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// A custom hook that handles the dynamiacally changing states of AttributeSearch.
const UseAttributeState = () => {
  let [attribute, setAttribute] = (0, _react.useState)('');
  let [value, setValue] = (0, _react.useState)('');
  let [submitError, setSubmitError] = (0, _react.useState)(false);
  return {
    attribute,
    value,
    submitError,
    setAttribute,
    setSubmitError,
    setValue
  };
}; // Code that filters and displays all the Pokemon that satisfy certain filtered characteristics from the Results page.


const AttributeSearch = props => {
  const {
    attribute,
    value,
    submitError,
    setAttribute,
    setSubmitError,
    setValue
  } = UseAttributeState(); // Called when submitting the attribute type.

  const handleAttributeSubmit = event => {
    const attributeName = attribute.toLowerCase();
    event.preventDefault(); //If submitted attribute type doesn't match type, weight, or move, error message is submitted.

    if (attributeName !== 'type' && attributeName !== 'weight' && attributeName !== 'move') {
      setSubmitError(true);
    } else {
      setSubmitError(false);
      props.onSubmitAttribute(attributeName);
    }

    setAttribute('');
  }; // Called when submitting the value type.


  const handleValueSubmit = async event => {
    const valueAmount = value.toLowerCase();
    event.preventDefault();
    props.onSubmitValue(valueAmount);
    setValue('');
  };

  return /*#__PURE__*/_react.default.createElement("div", null, "Search for pokemon here!", /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleAttributeSubmit,
    className: "attribute_form"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "attribute_input",
    type: "text",
    value: attribute,
    onChange: event => setAttribute(event.target.value),
    placeholder: "Enter an attribute type",
    required: true
  }), submitError ? /*#__PURE__*/_react.default.createElement("div", {
    className: "invalid_attribute"
  }, "Invalid attribute type! Please select amongst type, move, or weight!") : null), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleValueSubmit,
    className: "onSubmit_form"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "value_input",
    type: "text",
    value: value,
    onChange: event => setValue(event.target.value),
    placeholder: "Enter a value",
    required: true
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "search_button",
    onClick: props.onClick
  }, "Search for Pokemon"));
};

var _default = AttributeSearch;
exports.default = _default;