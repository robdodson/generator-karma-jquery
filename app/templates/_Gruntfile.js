'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%%= pkg.name %> - v<%%= pkg.version %> - ' +
      '<%%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%%= grunt.template.today("yyyy") %> <%%= pkg.author.name %>;' +
      ' Licensed MIT */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['scripts/**/*.js'],
        dest: 'dist/jquery.<%%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%%= banner %>'
      },
      dist: {
        src: '<%%= concat.dist.dest %>',
        dest: 'dist/jquery.<%%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: ['scripts/**/*.js']
      },
      test: {
        src: ['test/**/*-test.js']
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true
        }
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        autoWatch: true
      },
      report: {
        singleRun: true,
        browsers: ['Chrome'],
        reporters: ['progress', 'html', 'coverage']
      }
    },
    watch: {
      options: {
        livereload: false
      },
      html: {
        files: ['index.html']
      },
      styles: {
        files: ['styles/**/*.css']
      },
      scripts: {
        files: ['scripts/**/*.js']
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      target: ['karma:unit', 'server']
    }
  });

  // Making grunt default to force so it won't die on jshint warnings
  grunt.option('force', true);

  // Default task.
  grunt.registerTask('default', ['jshint', 'concurrent']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('report', ['jshint', 'karma:report']);
  grunt.registerTask('release', ['jshint', 'clean', 'concat', 'uglify']);
};
