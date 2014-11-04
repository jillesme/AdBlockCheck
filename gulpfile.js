var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
  gulp.src('adblockcheck.js')
    .pipe(uglify())
    .pipe(jshint())
    .pipe(concat('adblockcheck.min.js'))
    .pipe(gulp.dest('./')
    );
});
