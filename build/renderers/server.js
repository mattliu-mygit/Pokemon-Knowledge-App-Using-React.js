"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRenderer = serverRenderer;

var React = _interopRequireWildcard(require("react"));

var ReactDOMServer = _interopRequireWildcard(require("react-dom/server"));

var _App = require("components/App");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function serverRenderer() {
  const initialData = {
    appName: 'Reactful'
  };
  const pageData = {
    title: `Hello ${initialData.appName}`
  };
  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(_App.App, {
      initialData: initialData
    })),
    pageData
  });
}