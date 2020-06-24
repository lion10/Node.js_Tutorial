const fs = require("fs")

//const readFile = fs.readdirSync("./Node Global")// Syncronus

// Asyncrounus so => hi there will print befour files 
fs.readdir("./Node Global", (err,file) => {
    if (err)
        throw err;
    console.log("complete")
    console.log(file);
})

console.log ("hi there!")

//console.log(readFile);