const fs = require("fs")


// sync
//const text = fs.readFileSync("./TheGlobalObject/app.js","UTF-8");
//console.log(text);


// async

fs.readFile("./TheGlobalObject/app.js","UTF-8",(err, text) =>{
    if (err)
        throw err
    console.log(text)
})

// img 

fs.readFile("./TheGlobalObject/omar.jpg",(err, img) =>{
    if (err)
        throw err
    console.log(img) // return buffer
})