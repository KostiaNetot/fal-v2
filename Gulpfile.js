'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./layout/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./layout/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./layout/sass/main.sass', ['sass']);
});
