const fs = require("fs"); 


const readStream = fs.createReadStream("./TheGlobalObject/test.md","UTF-8")
const writeStream = fs.createWriteStream("./lib/test.txt","UTF-8")

// 1st way 
readStream.on("data", data =>{
    writeStream.write(data);
})

// 2nd way
readStream.pipe(writeStream);