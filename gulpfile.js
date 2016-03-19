var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");

gulp.task('minify', function () {
  gulp.src('highstock.src.js')
    .pipe(uglify())
    .pipe(concat('highstock.js'))
    .pipe(gulp.dest("./") );
});
