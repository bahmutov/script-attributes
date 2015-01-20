/*global module:false*/
module.exports = function (grunt) {
  var sourceFiles = ['script-attributes.js'];

  grunt.initConfig({

    filenames: {
      options: {
        valid: 'dashes'
      },
      src: sourceFiles
    },

    jshint: {
      all: sourceFiles,
      options: {
        jshintrc: 'utils/.jshintrc',
        reporter: require('jshint-summary')
      }
    },

    eslint: {
      target: sourceFiles,
      options: {
        config: 'utils/eslint.json',
        rulesdir: ['./node_modules/eslint-rules']
      }
    },

    jscs: {
      src: sourceFiles,
      options: {
        config: 'utils/jscs.json'
      }
    },

    'clean-console': {
      options: {
        timeout: 1 // seconds to wait for any errors
      },
      iframe: {
        options: {
          url: 'index.html'
        }
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('lint', ['filenames', 'jshint', 'eslint', 'jscs']);
  grunt.registerTask('test', ['clean-console']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'lint', 'sync', 'test']);
};
