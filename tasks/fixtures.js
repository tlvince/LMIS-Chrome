'use strict';

var path = require('path');
var yaml = require('js-yaml');
var changeCase = require('change-case');

module.exports = function(grunt) {

  var collections = [];
  var loadYaml = function(path) {
    var data = grunt.file.read(path);
    return yaml.safeLoad(data, {
      filename: path,
    });
  }

  grunt.registerMultiTask('fixtures', 'Load fixtures', function() {
    var options = this.options({
      collections: ''
    });

    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(src) {
        var dest = filePair.dest.replace(/\.ya?ml$/, '.json');
        var yaml = loadYaml(src);

        var basename = path.basename(src, '.yaml');
        var collection = changeCase.camel(basename);
        collections.push(collection);

        var json = {};
        json[collection] = yaml;
        json = JSON.stringify(json, null, 2);
        grunt.file.write(dest, json);
        grunt.log.writeln('Compiled ' + src.cyan + ' -> ' + dest.cyan);
      })

    });

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
