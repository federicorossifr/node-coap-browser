
module.exports = function(grunt) {

  grunt.initConfig({
  	wiredep: {
	  task: {
	    src: [
	      'views/*.html',  
	      'views/*.ejs',   
        'views/templates/*.ejs'
	    ],
	  },
	  options: {
      'overrides': {
        'socket.io-client': {
          'main': 'dist/socket.io.js'
        },
      "bootstrap": {
      	"main": [
        	"dist/js/bootstrap.js",
        	"dist/css/bootstrap.css"
      	]
    	}
      }
     }
	}
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['jshint']);
};