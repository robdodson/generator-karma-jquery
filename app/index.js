'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KarmaJquery = module.exports = function KarmaJquery(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(KarmaJquery, yeoman.generators.Base);

KarmaJquery.prototype.app = function app() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_index.html', 'index.html');
  this.template('_karma.conf.js', 'karma.conf.js');
  this.copy('example.css', 'styles/example.css');
  this.copy('example.js', 'scripts/example.js');
  this.copy('example-test.js', 'test/example-test.js');
  this.copy('example.html', 'test/fixtures/example.html');
};

KarmaJquery.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

KarmaJquery.prototype.gitfiles = function gitfiles() {
  this.copy('gitattributes', '.gitattributes');
  this.copy('gitignore', '.gitignore');
};
