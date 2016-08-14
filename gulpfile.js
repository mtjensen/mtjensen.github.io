var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

var nodePath = "./node_modules";

// gulp.task('vendor', function() {
// 	gulp.src(`${nodePath}/animsition/dist/**/*`)
// 		.pipe(gulp.dest('./vendor/animsition'))
// 	gulp.src(`${nodePath}/fullpage.js/**/*`)
// 		.pipe(gulp.dest('./vendor/fullpage.js'))
// 	gulp.src(`${nodePath}/fittext.js/jquery.fittext.js`)
// 		.pipe(gulp.dest('./vendor/fittext.js'))
// 	gulp.src(`${nodePath}/mfb/src/**/*`)
// 		.pipe(gulp.dest('./vendor/mfb'))
// });

var javascriptSources = [
	`${nodePath}/bootstrap/dist/js/bootstrap.js`, 
	`${nodePath}/fullpage.js/jquery.fullPage.js`, 
	`${nodePath}/animsition/dist/js/animsition.js`, 
	`${nodePath}/fittext.js/jquery.fittext.js`, 
	`./src/classie/classie.js`,
	`./src/cbpAnimatedHeader/cbpAnimatedHeader.js`, 
	`${nodePath}/mfb/src/mfb.js`,
	`./src/main.js`,
	`./src/language.js`];

gulp.task('compressJS', function() {
	gulp.src(javascriptSources)
		.pipe(uglify())
		.pipe(concat('compressed.js'))
		.pipe(gulp.dest('./js/'));
})

gulp.task('default')