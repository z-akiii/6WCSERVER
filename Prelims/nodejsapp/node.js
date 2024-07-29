var namecall = require('./namecall');
var http = require('http');
var server = http.createServer(function (req, res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h1>Welcome to my Node.js Application</h1></body></html>')
        res.write('Welcome '+ namecall + '. This is an activity about basics of Node.js')
        res.end();
    } else if(req.url == '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h1>This is About Page</h1></body></html>')
        res.write('Hello '+ namecall + '. This activity will teach on how to deal with a simple sever and local modules in Node.js')
        res.end();
    } else if(req.url == '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h1>This is Contact Page</h1></body></html>')
        res.write(namecall + ', if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials')
        res.end();
    } else if(req.url == '/gallery'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h1>This is Gallery Page</h1></body></html>')
        res.end();
    } else{
        res.end('Invalid Request')
    }

});
server.listen(5000); 
console.log('Node.js web server at port 5000 is running...')