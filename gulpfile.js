var gulp = require('gulp')

gulp.task('vendor', function() {
	gulp.src('./node_modules/animsition/dist/**/*')
		.pipe(gulp.dest('./vendor/animsition'))
	gulp.src('./node_modules/fullpage.js/**/*')
		.pipe(gulp.dest('./vendor/fullpage.js'))
	gulp.src('./node_modules/fittext.js/jquery.fittext.js')
		.pipe(gulp.dest('./vendor/fittext.js'))
	gulp.src('./node_modules/mfb/src/**/*')
		.pipe(gulp.dest('./vendor/mfb'))
});