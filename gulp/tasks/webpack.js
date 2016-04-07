const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const babel   = require('gulp-babel');
const webpack = require('gulp-webpack');
const config  = require('../config.js');

gulp.task('webpack', function() {
  gulp.src( config.webpack.entry )
      .pipe( webpack( config.webpack ) )
      .pipe( gulp.dest( config.js.dest ) );
});
