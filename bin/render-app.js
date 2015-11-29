'use strict';

require('node-jsx').install({harmony: true});

var jsonfile = require('jsonfile');
var argv = require('yargs').argv;

var app = require('../app/server.js')

function main(configPath, contentPath) {
  let config = jsonfile.readFileSync(configPath);
  let content = jsonfile.readFileSync(contentPath);
  let markup = app(config, content, (markup) => {
    process.stdout.write(markup);
    process.exit(0);
  });
};

main(argv.config, argv.content);
