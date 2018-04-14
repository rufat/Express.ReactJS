const http = require('http'),
    httpProxy = require('http-proxy');

const apps = {
    server : new httpProxy.createProxyServer({
        target: {
            host: 'localhost',
            port: 5000
        }
    })
};

http.createServer(function(req, res) {
    if (req.headers.host === 'localhost') {
        apps.server.proxyRequest(req, res);
        apps.server.on('error', function(err, req, res) {
            if (err) console.log(err);
            res.writeHead(500);
            res.end('[Server] Oops, something went very wrong...');
        });
    }
}).listen(80, () => console.log('Proxy started...'));