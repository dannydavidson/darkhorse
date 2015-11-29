'use strict';

const Logger = require('loggly-browserify');
const render = require('react-dom').render;
const routes = require('./routes');
const db = require('./db');

module.exports = function (config, content, domNode) {
  let logger = new Logger(config.logglyKey);
  let db = db(config.firebase, logger, content);
  render(routes(db, logger), domNode);
};
