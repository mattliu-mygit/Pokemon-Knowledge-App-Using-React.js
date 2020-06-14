"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A small component that displays the characteristics to match for.
const Attribute = props => {
  return /*#__PURE__*/_react.default.createElement("h2", {
    className: "guess_message"
  }, "Guess a Pokemon with the ", props.attribute[0], ": ", props.attribute[1]);
};

var _default = Attribute;
exports.default = _default;