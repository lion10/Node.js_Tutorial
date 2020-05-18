const http = require('http'); 
const server = http.createServer( (req,res) => {
    if(req.url === '/'){
        res.write('hello world from root side')
        res.end();
    }else {
        res.write('you read from another side')
        res.end();

    }
})

server.listen('3000');