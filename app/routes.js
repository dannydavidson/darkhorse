'use strict';

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;

const Marketing = require('./components/Marketing');

module.exports = function (db, logger) {
  return (
    <Router>
      <Route path="/" component={Marketing} db={db} logger={logger}>
      </Route>
    </Router>
  );
};
