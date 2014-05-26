'use strict';

var gulp = require('gulp');
var assemble = require('gulp-assemble');

// Assemble 
var assembleOptions = {
  //data: 'data/*.json',
  partials: 'templates/partials/*.hbs',
  layoutdir: 'templates/layouts/'
};

gulp.task('assemble', function () {
  gulp.src('templates/pages/*.hbs')
    .pipe(assemble(assembleOptions))
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);