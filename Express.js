const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Hello World! hi omar ');
})

// http://localhost:3000/example/omar/20?tutorial=nodejs&sort=age

    // req.params ==> { name: 'omar', age: '20' }
    // req.query  ==> { tutorial: 'nodejs', sort: 'age' }


app.get('/example/:name/:age',(req,res)=> {


    //res.send(req.params);
    console.log(req.params);    // it must send to server, it should not be blank
    console.log(req.query);     // its optional, may be leave it without fill the input
    res.send(req.params.name +" : "+ req.params.age);


})

app.listen('3000');