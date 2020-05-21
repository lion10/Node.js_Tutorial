const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'site')));

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'site','index.html'));
})

app.listen('3000');