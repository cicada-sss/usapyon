var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', () => {
  return gulp.src(['./src/*.pug', '!./src/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./docs/'));
});
