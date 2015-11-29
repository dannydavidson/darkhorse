'use strict';

require('node-jsx').install({harmony: true});

var fs = require('fs');
var Handlebars = require('handlebars');
var jsonfile = require('jsonfile');
var argv = require('yargs').argv;

function main(configPath, contentPath, htmlFilePath) {
  let config = jsonfile.readFileSync(configPath);
  let content = jsonfile.readFileSync(contentPath);
  let template = Handlebars.compile(fs.readFileSync(htmlFilePath).toString());
  let app = '';

  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      app += chunk;
    }
  });

  process.stdin.on('end', function() {
    fs.writeFileSync('./dist/index.html', template({app: app, config: config, content: content, contentJSON: JSON.stringify(content)}), 'utf8');
  });

};

main(argv.config, argv.content, argv.html);
