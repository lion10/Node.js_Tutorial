// this file just i copyied it from JsonBody Bransh so => if you want to test this file plz go to the bransh 
// JsonBody and test there ... not here yub ^__^

const express = require('express');
const bodyParser =require('body-parser');
const path = require('path');
const app = express(); 

app.use('public', express.static(path.join(__dirname,'site1','index.html')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/',(req ,res)=> {
    res.sendFile(path.join(__dirname,'site1','index.html'));
});

app.post('/',(req, res)=> {
    console.log(req.body);
    // some database call here
    // res.send('successfully posted data');
    res.json({success: true});
});

app.listen(3000);