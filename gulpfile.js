let gulp = require("gulp");
let pug = require("gulp-pug");
let sass = require("gulp-sass");

gulp.task("pug", () => {
  return gulp
    .src(["./src/*.pug", "!./src/_*.pug"])
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("./src/"));
});

gulp.task("sass", done => {
  gulp
    .src("./src/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./src/"));
  done();
});

gulp.task(
  "default",
  gulp.parallel("pug", "sass", done => {
    console.log("task default");
    done();
  })
);
