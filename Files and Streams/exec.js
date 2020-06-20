const cp = require("child_process")

// exec : to handle synchronous processes


// to execute js file / external commands too
// cp.exec("node ../Node Global/index",(err , data , stderr) =>{
//     console.log(data); 
// })

// open link 

cp.exec("open http://github.com/")