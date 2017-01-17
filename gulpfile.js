var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
  return sass('app/sass/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('app/dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('app/dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('angular-scripts', function() {
	return gulp.src([
		'app/bower_components/jquery/dist/jquery.js',
		'app/bower_components/angular/angular.js',
		'app/bower_components/angular-animate/angular-animate.js',
		'app/bower_components/angular-resource/angular-resource.js',
		'app/bower_components/angular-route/angular-route.js',
    'app/bower_components/angular-pageslide-directive.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
	.pipe(concat('ng-deps.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/dist/assets/js/'));
});

gulp.task('app-scripts', function() {
	return gulp.src([
	'app/app.module.js',
	'app/app.config.js',
	'app/app.animations.js',
	'app/core/project/project.module.js',
	'app/core/project/project.service.js',
	'app/project-featured/project-featured.module.js',
	'app/project-featured/project-featured.component.js',
	'app/project-list/project-list.module.js',
	'app/project-list/project-list.component.js',
	'app/project-detail/project-detail.module.js',
	'app/project-detail/project-detail.component.js',
	'app/page-slide/page-slide.component.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
	.pipe(concat('app-deps.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/dist/assets/js/'))
	.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('app/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('app/dist/assets/img'));
});

gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'app-scripts', 'angular-scripts', 'images');
});