'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('MeanModules:generators/node', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../generators/node'))
            .withArguments('name')
            .withOptions({
                skipInstall: true,
                force: true
            })
            .on('end', done);
    });

    it('creates files', function() {
        assert.file([
            'name/index.js',
            'name/name.controller.js',
            'name/name.model.js',
            'name/name.socket.js',
            'name/name.spec.js'
        ]);
    });
});
