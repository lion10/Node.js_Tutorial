const cp = require("child_process"); 
const questionApp = cp.spawn("node",["questions.js"]);

questionApp.stdin.write(" Omar \n")
questionApp.stdin.write(" Gaza \n")
questionApp.stdin.write(" paly lol \n")


questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`)
})

questionApp.on("colse", ()=> {
    console.log(`questionApp process exited`);
})