/*jslint node: true */
'use strict';

var server = require('gulp-express');
var gulp = require('gulp');

// express(mock)
gulp.task('express', function(){
  server.run({
    file: './server/app.js'
  });
});
