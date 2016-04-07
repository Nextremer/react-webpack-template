var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { resource: true });

gulp.task('watch', ['webpack'], function() {
  gulp.watch('./src/js/**/*.js', ['webpack']);
  gulp.watch('./src/js/**/*.css', ['webpack']);
  gulp.watch('./src/*.html', ['copy']);
});

gulp.task('default', ['copy', 'webpack', 'watch']);

