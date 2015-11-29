'use strict';

const Firebase = require('firebase');
const Content = require('./content/Service');

module.exports = function(firebaseUrl, logger, content) {

  let fb = new Firebase(firebaseUrl);

  return {
    content: new Content(fb, logger, content)
  };
};
