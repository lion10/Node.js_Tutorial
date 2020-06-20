const fs = require("fs");
if (fs.existsSync("storge")){
    console.log("the dir already there")
}else{
    fs.mkdir("storge", err =>{
        if (err)
            throw err 
        console.log("dir created")
    })
}