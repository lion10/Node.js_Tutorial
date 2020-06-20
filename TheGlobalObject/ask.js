const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("ho are u? ", (data)=> {
    console.log (`you ans ${data}`)
})