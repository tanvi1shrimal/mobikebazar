var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	imageMin = require('gulp-imagemin'),
	merge = require('merge-stream'),
	image = require('gulp-image'),
	svgmin = require('gulp-svgmin'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin');

// JADE --> HTMl
gulp.task('html', function () {
	gulp.src('src/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('dist/'));
});

// SASS --> CSS --> Autoprefix --> Minify --> final CSS file
gulp.task('styles', function () {
	sass('src/css/*.scss')
		.pipe(autoprefixer({
			browsers: ['IE 9', 'last 3 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/'));
});

// Minifying JS files
gulp.task('scripts', function () {
	var plugins = gulp.src('src/js/plugins/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/plugins/'));

	var custom = gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));

	return merge(plugins, custom);
});

// Images not getting compressed. Needs to be checked. Copying over images as is for now.
gulp.task('images', function () {
	gulp.src('src/img/**')
		.pipe(image({
			pngquant: true,
			optipng: true,
			zopflipng: false,
			jpegRecompress: false,
			jpegoptim: true,
			mozjpeg: true,
			gifsicle: true,
			svgo: true,
			concurrent: 10
		}))
		.pipe(gulp.dest('dist/img/'));
});


// Copying over font files
gulp.task('fonts', function (){
	gulp.src('src/fonts/**')
		.pipe(gulp.dest('dist/fonts'))
});

//SVG Optimizations

var svgConfig = {
	plugins: [{
			removeDoctype: false
		},
		{
			removeComments: false
		},
		{
			multiPass: true
		},
		{
			cleanupAttrs: true
		},
		{
			removeUnknownsAndDefaults: true
		},
		{
			removeUnusedNS: true
		},
		{
			cleanupEnableBackground: true
		},
		{
			collapseGroups: true
		},
		{
			convertShapeToPath: true
		},
		{
			convertStyleToAttrs: true
		},
		{
			sortAttrs: true
		},
		{
			removeViewBox: false
		},
		{
			removeUselessStrokeAndFill: false
		},
		{
			cleanupNumericValues: {
				floatPrecision: 2
			}
		},
		{
			convertColors: {
				names2hex: false,
				rgb2hex: false
			}
		}
	]
};

gulp.task('optimSvg', function () {
	return gulp.src('./src/img/**/*.svg')
		.pipe(svgmin(svgConfig))
		.pipe(gulp.dest('./optimized/img/'));
});
//SVG Optimizations End

//HTML Minifications
gulp.task('minifyHtml', function (){
	gulp.src('dist/*.html')
		// .pipe(jade({
		// 	pretty: true
		// }))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./optimized'));
});
//End - HTML Minifications

//JS Concat all to one Main.js
gulp.task('concatJs', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('main.min.js'))
	.pipe(uglify())
    .pipe(gulp.dest('./optimized/js/'));
});

//JS Concat all to one Main.js
gulp.task('copyJs', function() {
  return gulp.src('./src/js/**/*.js')
	.pipe(uglify())
    .pipe(gulp.dest('./optimized/js/'));
});

//JS Concat all to one Main.js
gulp.task('copyCss', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(gulp.dest('./optimized/css/'));
});

//Optimize the site
gulp.task('optimizeAll',['minifyHtml','concatJs','copyJs','optimSvg'], function(){
	console.log('All the assets have been optimized');
});

//  Run all tasks
gulp.task('default', ['html', 'styles', 'scripts', 'images', 'fonts']);