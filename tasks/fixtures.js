'use strict';

var path = require('path');
var yaml = require('js-yaml');
var changeCase = require('change-case');

module.exports = function(grunt) {

  var json = {};
  var collections = {};
  var loadYaml = function(path) {
    var data = grunt.file.read(path);
    return yaml.safeLoad(data, {
      filename: path,
    });
  };

  grunt.registerMultiTask('fixtures', 'Load fixtures', function() {
    var options = this.options({
      dest: '',
      collections: ''
    });

    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(src) {
        var yaml = loadYaml(src);

        var basename = path.basename(src, '.yaml');
        var constant = changeCase.constantCase(basename);
        var collection = changeCase.camel(basename);

        json[collection] = yaml;
        grunt.log.writeln('Compiled ' + src.cyan);
        collections[constant] = collection;
      });
    });

    json = JSON.stringify(json, null, 2);
    grunt.file.write(options.dest, json);
    grunt.log.writeln('Compiled ' + options.dest.cyan);

    if (options.collections) {
      collections = JSON.stringify(collections, null, 2);
      grunt.file.write(options.collections, collections);
      grunt.log.writeln('Wrote collections at ' + options.collections.cyan);

      grunt.config('ngconstant.fixtures', {
        options: {
          name: 'db',
          dest: '<%= yeoman.app %>/scripts/db.js',
        },
        constants: {
          collections: grunt.file.readJSON(options.collections)
        }
      });
      grunt.task.run('ngconstant:fixtures');
    }
  });
};
