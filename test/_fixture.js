'use strict';
const chalk = require('..');
const chalkStderr = require('../stderr');

console.log(chalk.hex('#ff6159')('test'));
console.error(chalkStderr.hex('#ffe861')('test stderr'));
