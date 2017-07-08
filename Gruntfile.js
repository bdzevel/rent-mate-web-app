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
    },
  });

  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', [ 'eslint', 'webpack' ]);
  grunt.registerTask('test', [ 'eslint' ]);
  grunt.registerTask('build', [ 'eslint', 'webpack' ]);
};
