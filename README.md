# generator-mean-modules 

[![Build Status](https://travis-ci.org/PauloLuan/generator-mean-modules.svg)](https://travis-ci.org/PauloLuan/generator-mean-modules)
[![Coverage Status](https://coveralls.io/repos/PauloLuan/generator-mean-modules/badge.svg)](https://coveralls.io/r/PauloLuan/generator-mean-modules)
[![bitHound Score](https://www.bithound.io/github/PauloLuan/generator-mean-modules/badges/score.svg)](https://www.bithound.io/github/PauloLuan/generator-mean-modules/)
[![Dependency Status](https://david-dm.org/PauloLuan/generator-mean-modules.svg "Dependencies Checked & Updated Regularly (Security is Important!)")](https://david-dm.org/PauloLuan/generator-mean-modules)

## About this generator

> This is a [Yeoman](http://yeoman.io) generator created to generate modules both for AngularJS and NodeJS.

Basically it scaffolds the following structure for your Angular client side, assuming you're using the [best practices structure]():

	├───moduleName
	│		moduleName.controller.js
	│		moduleName.controller.spec.js
	│		moduleName.html
	│		moduleName.js
	│		moduleName.scss

And the following structure for Node, assuming you're using [this structure]():

	├───moduleName
	│ 		index.js
	│ 		moduleName.controller.js
	│ 		moduleName.model.js
	│ 		moduleName.socket.js
	│ 		moduleName.spec.js

In order to make an organized and easier way to create quickstart routes and modules for MEAN applications.

## Getting Started

You must install [Yeoman](http://yeoman.io) generator:

```bash
npm install -g yo
```

### Yeoman Generators

To install `generator-mean-modules` from npm, just run:

```bash
npm install -g generator-mean-modules
```

Finally, initiate the generator:

for angular (Frontend):
```bash
yo mean-modules:angular NAME_OF_MODULE
```

for node (Backend)
```bash
yo mean-modules:node NAME_OF_MODULE
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
