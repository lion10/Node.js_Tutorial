const fs = require("fs")
const color = require("../lib/color.json")

color.colorList.map(col =>{
    fs.appendFile("./storge/color.md",`${col.color}: ${col.hex} \n`,err=>{
        if (err)
            throw err
    })
})