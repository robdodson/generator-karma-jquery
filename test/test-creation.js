/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;


describe('karma-jquery generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('karma-jquery:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'bower.json',
      'Gruntfile.js',
      'index.html',
      'karma.conf.js',
      'package.json',
      '.editorconfig',
      'test/example-test.js',
      'styles/example.css',
      'test/fixtures/example.html',
      'scripts/example.js',
      '.gitattributes',
      '.gitignore',
      '.jshintrc'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
