// = load grunt
//-----------------------------------------------------------------------------//
    
    var gulp = require('gulp');


// = load plugins
//-----------------------------------------------------------------------------//
    
    var assemble = require('gulp-assemble');
    var htmlmin = require('gulp-htmlmin');


// = assemble
//-----------------------------------------------------------------------------//

    var options = {
        data: 'data/*.json',
        partials: 'app/templates/partials/*.hbs',
        layoutdir: 'app/templates/layouts/',
        layout: 'default.hbs'
    };

    gulp.task('assemble', function () {
        gulp.src('app/templates/pages/*.hbs')
        .pipe(assemble(options))
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'));
    });


// = tasks 
//-----------------------------------------------------------------------------//
    
    // default 'gulp'
    gulp.task('default', ['assemble']);
    
    // 'gulp watch'
    gulp.task('watch', ['assemble'], function(){

        
    });
    
    
    
    
    
    