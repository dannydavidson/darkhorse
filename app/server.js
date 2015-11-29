'use strict';

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const router = require('react-router');
const routes = require('./routes');
const DB = require('./db');

module.exports = function (config, content, callback) {
  let logger = [];
  let db = DB(config.firebase, logger, content);
  router.match({ routes: routes(db, logger), location: '/' }, (error, redirectLocation, renderProps) => {
    callback(renderToString(<router.RoutingContext {...renderProps} />));
  });
}
