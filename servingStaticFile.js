const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    const readStream = fs.createReadStream('./simpleExtension/icon16.png');
    // res.writeHead(200,{'Content-type': 'text/html'}); for html file
    //  res.writeHead(200,{'Content-type': 'appliction/json'}); // for json file
     res.writeHead(200,{'Content-type': 'image/png'}); // for image file
    readStream.pipe(res);
}).listen('3000');