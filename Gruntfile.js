const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        config: './.eslintrc.js',
      },
      src: [ '.' ],
    },
    webpack: {
      prod: webpackConfig,
    },
  });

  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', [ 'eslint', 'webpack' ]);
  grunt.registerTask('test', [ 'eslint' ]);
  grunt.registerTask('build', [ 'webpack' ]);
};
