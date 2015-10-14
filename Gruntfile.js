module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			default: 'cd node_modules/bootstrap;grunt dist'
		},
		sync: {
			main: {
				files: [{
					cwd: 'node_modules/bootstrap/dist'
					src: ['**'],
					dest: 'bootstrap'
				}]
			}
		}	
	});

	grunt.loadNpmTasks('grunt-exec', 'grunt-sync');

	grunt.registerTask('default', ['exec', 'sync']);
};