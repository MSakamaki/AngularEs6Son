/*jslint node: true */
'use strict';

var gulp = require('gulp');
var config = require('../gulp.config');

// es6 transpiler
var to5 = require('gulp-6to5');
var traceur = require('gulp-traceur');
var transpiler = (config.System.transpiler === '6to5')?to5:traceur;

gulp.task('build-es6:e2e', ['clean:e2e'], function(){
  return gulp.src(config.test.e2e.src)
    .pipe(transpiler())
    .pipe(gulp.dest(config.test.e2e.tmp));
});
