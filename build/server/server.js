"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _config = _interopRequireDefault(require("server/config"));

var _server = require("renderers/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.enable('trust proxy');
app.use((0, _morgan.default)('common'));
app.use(_express.default.static('public'));
app.set('view engine', 'ejs');
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.locals.serialize = _serializeJavascript.default;

if (_config.default.isDev) {
  app.locals.gVars = {
    main: ['main.css', 'main.js'],
    vendor: 'vendor.js'
  };
} else {
  try {
    app.locals.gVars = require('../../.reactful.json');
  } catch (err) {
    console.error('Reactful did not find Webpack generated assets');
  }
}

app.get('*', async (req, res) => {
  try {
    const vars = await (0, _server.serverRenderer)();
    res.render('index', vars);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
app.listen(_config.default.port, _config.default.host, () => {
  console.info(`Running on ${_config.default.host}:${_config.default.port}...`);
});