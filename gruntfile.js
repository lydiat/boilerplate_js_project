// Gruntfile.js

// all configuration goes inside this wrapper function (required by grunt and plugins)
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'), // get the configuration info from package.json

    jshint: {// configure jshint to validate js files
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      build: ['Gruntfile.js', 'js/*.js'] // when this task is run, lint the Gruntfile and all js files in src
    },

    less: { // compile less stylesheets to css 
      build: {
        files: {
          'css/style.css': 'css/style.less'
        }
      }
    },

    watch: {    // configure watch to auto update 
      
      files: ['css/*.css', 'css/*.less'], 
      tasks: ['less'] ,

      scripts: { 
        files: 'js/*.js', tasks: ['jshint'] 
      } 
    }

  });

// load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
