var gulp = require('gulp')

var $NODE = "./node_modules"

gulp.task('vendor', function() {
	gulp.src(`${$NODE}/animsition/dist/**/*`)
		.pipe(gulp.dest('./vendor/animsition'))
	gulp.src(`${$NODE}/fullpage.js/**/*`)
		.pipe(gulp.dest('./vendor/fullpage.js'))
	gulp.src(`${$NODE}/fittext.js/jquery.fittext.js`)
		.pipe(gulp.dest('./vendor/fittext.js'))
	gulp.src(`${$NODE}/mfb/src/**/*`)
		.pipe(gulp.dest('./vendor/mfb'))
});