var http = require('http');

const PORT = 80;
const HOST = '0.0.0.0';

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from child!");

});

server.listen(PORT, HOST);


console.log("Server running at http://$s:%d", HOST, PORT);
