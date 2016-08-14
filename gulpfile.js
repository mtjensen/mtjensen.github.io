var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var nodePath = "./node_modules";

var javascriptSources = [
	`${nodePath}/bootstrap/dist/js/bootstrap.js`, 
	`${nodePath}/fullpage.js/jquery.fullPage.js`, 
	`${nodePath}/animsition/dist/js/animsition.js`, 
	`${nodePath}/fittext.js/jquery.fittext.js`, 
	`./src/js/classie/classie.js`,
	`./src/js/cbpAnimatedHeader/cbpAnimatedHeader.js`, 
	`${nodePath}/mfb/src/mfb.js`,
	`./src/js/main.js`,
	`./src/js/language.js`];

var cssSources = [
	`./src/bootstrap/css/bootstrap.css`,
	`${nodePath}/fullpage.js/jquery.fullPage.css`,
	`${nodePath}/animsition/css/animsition.css`,
	`${nodePath}/mfb/src/mfb.css`,
	'src/css/main.css'
];

gulp.task('vendor', function() {
	gulp.src(`${nodePath}/mfb/src/lib/modernizr.touch.js`)
		.pipe(gulp.dest('./js/'))
});

gulp.task('compressJS', function() {
	return gulp.src(javascriptSources)
		.pipe(uglify())
		.pipe(concat('compressed.js'))
		.pipe(gulp.dest('./js/'));
})


gulp.task('compressCSS', function() {
	return gulp.src(cssSources)
		.pipe(cleanCSS())
		.pipe(concat('compressed.css'))
		.pipe(gulp.dest('./css/'))
})

gulp.task('default', ['vendor', 'compressJS', 'compressCSS'])