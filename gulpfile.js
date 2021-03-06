'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jsDest = './template/_js'

gulp.task('sass', function () {
  return gulp.src('./template/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./template/_css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./template/sass/**/*.scss', ['sass']);
});


gulp.task('buildboostrapjs', function () {
  var jsFiles = [
    'node_modules/tether/dist/js/tether.min.js',
  ];
  return gulp.src(jsFiles)
  .pipe(concat('tether.min.js'))
  .pipe(gulp.dest(jsDest));


  var jsFiles = [
    'node_modules/tether/dist/js/tether.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ];
  return gulp.src(jsFiles)
  .pipe(concat('boostrap.min.js'))
  .pipe(gulp.dest(jsDest));

});
