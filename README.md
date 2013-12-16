# generator-karma-jquery [![Build Status](https://secure.travis-ci.org/robdodson/generator-karma-jquery.png?branch=master)](https://travis-ci.org/robdodson/generator-karma-jquery)

[Yeoman][] generator for building jQuery plugins with Karma and Jasmine. Based on the [jQuery Boilerplate][] by [@zenorocha][]

*OMG, we codin' so fast!* <br>
![](http://media.giphy.com/media/9CffOPMLx0Hf2/giphy.gif)

## Getting Started

1. Install the generator by running: `npm install -g generator-karma-jquery`
2. Run: `yo karma-jquery`
3. Run: `grunt` to start up Karma on port `9876` and a LiveReload server on port `9000`
4. Write your plugin **with tests.** Conquer the internets.

## Grunt Tasks

Task        | Description
---         | ---
`default`   | Start a Karma server on port `9876` and a LiveReload server on port `9000`
`report`    | Run Karma and generate code coverage reports in `test/coverage` and browser reports in `test/report`
`server`    | Run a LiveReload server on port `9000`
`release`   | Concat and minify JavaScript and output to `dist` directory

## Soul-crushing Gotchas

Karma tests **must** be in the active browser tab. This means you should connect to the LiveReload server in **a separate browser window.** Otherwise everything will be really slow. And you'll be bummed.

## What's Included

- Fixtures with [jasmine-jquery][]
- Code Coverage with [karma-coverage][]
- HTML Reports with [karma-html-reporter][]

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[Yeoman]: http://yeoman.io
[jQuery Boilerplate]: https://github.com/jquery-boilerplate/generator-jquery-boilerplate
[@zenorocha]: https://github.com/zenorocha
[jasmine-jquery]: https://github.com/velesin/jasmine-jquery
[karma-coverage]: https://github.com/karma-runner/karma-coverage
[karma-html-reporter]: https://github.com/dtabuenc/karma-html-reporter
