'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('default', function () {
    return gulp.src('app/_/sass/app.scss')
        .pipe(sass({sourcemap: true}))
        .pipe(gulp.dest('dist'));
});