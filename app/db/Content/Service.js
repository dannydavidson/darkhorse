'use strict';

class Content {

  constructor(fb, logger, content) {
    this.fb = fb;
    this.logger = logger;
    this.content = content;
  }

  get(key) {
    return this.content[key];
  }

}

module.exports = Content;
