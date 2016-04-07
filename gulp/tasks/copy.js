const gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('src/*.html')
      .pipe( gulp.dest('www') );
});
