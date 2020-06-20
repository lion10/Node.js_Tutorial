const fs = require("fs");

const md = `
# new file
## name
    *Omar 
    *Moh
    *khalil 
`;

fs.writeFile("./TheGlobalObject/test.md",md.trim(),err =>{
    if(err)
        throw err
})