var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.src('./adblockcheck.js')
    .pipe(uglify())
    .pipe(concat('adblockcheck.min.js'))
    .pipe(gulp.dest('./')
    );
});
