'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function () {
    let db = this.props.route.db;
    return (
      <div id="D23">{db.content.get('title')}</div>
    );
  }
});
