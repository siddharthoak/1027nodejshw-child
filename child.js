var http = require('http');

const PORT = 8080;
const HOST = '0.0.0.0';

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from child and child.js!");

});



server.listen(PORT, HOST);


console.log("Server running at http://$s:%d", HOST, PORT);
