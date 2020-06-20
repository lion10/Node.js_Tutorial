const fs = require("fs")

fs.readdirSync("./storge").forEach(file =>{
    fs.unlink(`./storge/${file}`,err =>{
        if (err)
            throw err
    })
})

fs.rmdir("./storge",err =>{
    if (err)
        throw err
})