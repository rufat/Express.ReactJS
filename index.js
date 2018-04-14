'use strict';
const path = require('path');

global.log = require('./src/server/util/log');
global.config = require('./config.json');
global.rootPath = path.dirname(require.main.filename || process.mainModule.filename);

const app = require('./src/server/app'),
    io = require('./src/server/socket');

new io(app.socket).main();

module.exports = app.listen;