const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    res.setHeader('Content-Type', 'text/plain');
    res.write('hello world');
    res.end();
});

server.listen(3000, () => {
    console.log('listening for requests on port 3000');
});