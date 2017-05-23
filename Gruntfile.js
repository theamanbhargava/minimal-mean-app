 module.exports = function(grunt) {

   var projectjsfile = [
     'public/js/test-app.js',
     'public/js/BaseController.js',
     'public/js/test-content-controller.js',
     'public/js/test-header-controller.js',
     'public/js/test-footer-controller.js'
   ];

   grunt.initConfig({

     pkg: grunt.file.readJSON('package.json'),
     // get the configuration info from package.json ----------------------------
     // this way we can use things like name and version (pkg.name)
     //    pkg: grunt.file.readJSON('package.json'),
     //
     //    ...

     // configure uglify to minify js files -------------------------------------
     uglify: {
       options: {
         banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
       },
       build: {
         files: {
           'public/build/app.min.js': projectjsfile
         }
       }
     },

     concat: {

       options: {
         separator: '\n;\n\n'
       },

       all: {
         src: [
           "public/js/test-lib.js",
           'bower_components/jquery/dist/jquery.min.js',
           'bower_components/bootstrap/dist/js/bootstrap.min.js',
           'bower_components/angular/angular.min.js',
           'bower_components/angular-ui-router/release/angular-ui-router.min.js'
         ],

         dest: 'public/build/lib.min.js'
       }
     },
     jshint: {
       beforeconcat: projectjsfile,
     },
     cssmin: {
       options: {
         shorthandCompacting: false,
         roundingPrecision: -1
       },
       target: {
         files: {
           'public/build/app.min.css': [
             'public/css/test-app.css',
             'bower_components/bootstrap/dist/css/bootstrap.css'
           ]
         }
       }
     }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks("grunt-contrib-uglify");
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');

   grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'cssmin']);
 };