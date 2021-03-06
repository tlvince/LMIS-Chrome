'use strict';

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/lodash/dist/lodash.min.js',
      'app/bower_components/restangular/dist/restangular.min.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/bower_components/ng-table/ng-table.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/bower_components/tv-breadcrumbs/dist/tv-breadcrumbs.min.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'app/bower_components/angular-toggle-switch/angular-toggle-switch.js',
      'app/bower_components/d3/d3.js',
      'app/bower_components/nvd3/nv.d3.js',
      'app/bower_components/moment/moment.js',
      'app/bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'app/scripts/main.js'
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // grunt-karma-coveralls
    reporters: [
      'progress',
      'coverage'
    ],
    preprocessors: {
      'app/scripts/**/*.js': 'coverage'
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },
    plugins: [
      'karma-*'
    ]
  });
};
