module.exports = function(grunt) {

	// grunt.initConfig({
	// 	exec: {
	// 		default: { 
	// 			cwd: 'node_modules/bootstrap'
	// 			cmd: 'grunt dist'
	// 		}
	// 	}

	// 	// , sync: {
	// 	// 	main: {
	// 	// 		files: [{
	// 	// 			cwd: 'node_modules/bootstrap/dist'
	// 	// 			src: ['**'],
	// 	// 			dest: 'bootstrap'
	// 	// 		}]
	// 	// 	}
	// 	// }	

	// });

	grunt.initConfig({
		exec: { 
			build_twbs: {
				cwd: 'node_modules/bootstrap',
				cmd: 'grunt dist'
			},
			echo: 'echo "I am cool"'
		},
		sync: {
			main: {
				files: [
					{cwd:'node_modules/bootstrap/dist/', src:['**'], dest: 'bootstrap/'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-sync');
	grunt.registerTask('default', ['exec', 'sync'])

};