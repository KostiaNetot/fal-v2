const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./fal_v2/layout/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

