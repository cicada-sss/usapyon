var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var runSequence = require("run-sequence");

gulp.task("pug", done => {
  return gulp
    .src(["./src/*.pug", "!./src/_*.pug"])
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("./docs/"));
  done();
});

gulp.task("sass", done => {
  gulp
    .src("./src/*.sass")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./docs/"));
  done();
});

gulp.task(
  "default",
  gulp.parallel("pug", "sass", done => {
    console.log("task default");
    done();
  })
);
