const http = require('http'); //loads the http module
const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.write('Hello world ');
        res.write("This is our first server");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings ');
        res.write(' at BTHS');
        res.end();
    }
})
server.listen(3000);
console.log("Listening on port 3000...");
//The server responds to my requests by changing its display
//I see Hello world This is our first server at root
//At /api/courses I see [1,2,3] This is a list of offerings  at BTHS