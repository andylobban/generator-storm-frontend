'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var StormFrontendGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.pkg = require('../package.json');
        
        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the Storm Frontend generator.'));

        var prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'What do you want to call the project?',
            default: this.appname || this.config.get('projectName')
        }];

        this.prompt(prompts, function (props) {
            this.projectName = props.projectName;
            
            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('app');
        this.mkdir('app/_');
        this.mkdir('app/templates/pages');
        this.mkdir('app/templates/layouts');
        this.mkdir('app/templates/partials');
        
        this.copy('headr.hbs', 'app/templates/pages/header.hbs');
        this.copy('footer.hbs', 'app/templates/pages/footer.hbs');
        this.copy('index.hbs', 'app/templates/pages/index.hbs');
        this.copy('layout.hbs', 'app/templates/layouts/default.hbs');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    }

});

module.exports = StormFrontendGenerator;