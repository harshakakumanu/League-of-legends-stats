/**
 * Created by harshavardhan on 15-03-10.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var stylus = require('gulp-stylus');
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
	require('./gulp/' + task)
})

gulp.task('dev', ['watch:css','watch:js','dev:server']);

gulp.task('js', function() {
	gulp.src(['ng/module.js','ng/**/*.js']).pipe(sourcemaps.init()).pipe(concat('app.js')).pipe(ngAnnotate()).pipe(uglify()).pipe(sourcemaps.write()).pipe(gulp.dest('assets'));
})

gulp.task('css', function() {
	gulp.src('css/**/*.styl').pipe(stylus()).pipe(gulp.dest('assets'));
})

gulp.task('watch:js',['js'], function() {
	gulp.watch('ng/**/*.js',['js']);
})

gulp.task('watch:css',['css'], function() {
	gulp.watch('css/**/*.styl',['css']);
})