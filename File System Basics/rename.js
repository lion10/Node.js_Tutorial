const fs = require("fs")
fs.renameSync("./lib/color.json","./lib/colorData.json")

fs.rename("./TheGlobalObject/omar.jpg","./TheGlobalObject/omarPicture.jpg", err =>{
    if(err)
        throw err; 
})

setTimeout(()=>{
    fs.unlinkSync("storge/color.md")
},5000)