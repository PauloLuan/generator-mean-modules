'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this.log('Generating "' + this.name + '" Domain Module.');
    },

    writing: function() {
        this.fs.copy(
            this.templatePath('/'),
            this.destinationPath(this.name)
        );
    }
});
