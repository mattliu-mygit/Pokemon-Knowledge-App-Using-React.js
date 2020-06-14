"use strict";

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('config', () => {
  it('has defaults', () => {
    expect(_config.default.host).toBe('localhost');
    expect(_config.default.port).toBe(1234);
    expect(_config.default.isBrowser).toBe(true);
    expect(_config.default.isDev).toBe(true);
  });
});