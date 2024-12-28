#!/usr/bin/env node

const port = (process.argv[2] || 3000); //if no port is passed then use 3000
const http = require('http');

//the HTTP createServer Library creates a web server which listens on that port
// when its callback function receives a request, it can examine the details using the req object and return a response using the res object
http.createServer((req, res) => {console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>Hello, my first Web server app</p>`);
}).listen(port);

console.log(`Server running at http://localhost:${port}`);