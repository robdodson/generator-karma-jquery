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

KarmaJquery.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome = this.yeoman +
  '_Project Name_ should not contain "jquery" or "js" and ' +
  'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
  'title_ should be a human-readable title, and doesn\'t need to contain ' +
  'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
  'Plugin" might have the name "awesome-plugin".' +
  '\n\n' +
  'For more information, please see the following documentation:' +
  '\n\n' +
  'Naming Your Plugin      http://plugins.jquery.com/docs/names/\n' +
  'Publishing Your Plugin  http://plugins.jquery.com/docs/publish/\n' +
  'Package Manifest        http://plugins.jquery.com/docs/package-manifest/\n';

  console.log(welcome);

  var prompts = [{
    name: 'name',
    message: 'Project Name'
  }, {
    name: 'title',
    default: 'Awesome jQuery plugin'
  }, {
    name: 'description',
    default: 'The best jQuery plugin ever.'
  }, {
    name: 'version'
  }, {
    name: 'repository'
  }, {
    name: 'bugs'
  }, {
    name: 'license',
    default: 'MIT'
  }, {
    name: 'github_username',
  }, {
    name: 'author_name'
  }, {
    name: 'author_email'
  }, {
    name: 'jquery_version',
    message: 'jQuery Version'
  }];

  var nameToMessage = function (name) {
    return name.split('_').map(
      function (x) { return this._.capitalize(x); }.bind(this)
    ).join(' ') + ':';
  }.bind(this);

  // Generate prompt messages if only the name is defined.
  prompts.map(function (entry) {
    if (entry.message === undefined) {
      entry.message = nameToMessage(entry.name);
    }
    return entry;
  }.bind(this));

  this.currentYear = (new Date()).getFullYear();

  this.prompt(prompts, function (props) {
    this.props = props;
    // For easier access in the templates.
    this.slugname = this._.slugify(props.name) || 'karma-jquery-plugin';
    cb();
  }.bind(this));
};

KarmaJquery.prototype.app = function app() {
  this.template('_bower.json', 'bower.json');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_index.html', 'index.html');
  this.template('_karma.conf.js', 'karma.conf.js');
  this.template('_package.json', 'package.json');
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
