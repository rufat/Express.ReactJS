'use strict';
global.config = require('./config.json');

const app = require('./src/server/app'),
    io = require('./src/server/socket');

new io(app.socket).main();

module.exports = app.listen;