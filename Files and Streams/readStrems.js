const fs = require("fs");
const readStream = fs.createReadStream("./TheGlobalObject/test.md","UTF-8");

// node js make application use less memory ... 
let fileTxt = ""; 
console.log("type ..")

readStream.on("data",data =>{
    console.log(`I read ${data.length - 1} char of text`)
    fileTxt+= data
})


readStream.once("data", data =>{
    console.log(data)
})

readStream.on("end", ()=> {
    console.log("finished reaeding file ")
    console.log(`In total I read ${fileTxt.length - 1} chars`)
})