const http = require('http'),
    fs = require('fs'),
    socketIO = require('socket.io'),
    express = require('express'),
    app = express();

let layers = {
    server: null,
    socket: null
};

/**
 * @name Index
 * @description A HTTP(s) server with ExpressJS.
 */
class index {
    constructor() {
        this.port = process.env.PORT || config.port
    }

    listen() {
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });

        app.get('/', (req, res) => {
            res.send('Please start the React app by typing "npm run client" command in your terminal.')
        });

        app.get('/ping', (req, res) => {
            res.json({users: [
                {name: 'rachel', score: 45},
                {name: 'lindsay', score: 12},
                {name: 'matthew', score: 96}
            ]});
        });

        layers.server = http.createServer(app);
        layers.socket = socketIO(layers.server);
        return layers.server.listen(this.port, () => console.log(`[DEV] Listening on port ${this.port}`));
    }
}

module.exports = {
    listen: new index().listen(),
    socket: layers.socket
};