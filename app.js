const fs = require('fs');

//create file

// fs.writeFile('test.txt','hi omar!',(err) => {
//     if(err)
//         console.log(err)
//     else{
//         console.log('File successfully created!')
//         fs.readFile('test.txt','utf8',(err,file)=>{ // utf8 is an optional but to read from file we have to put it
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
//     }
// })

// rename file 

// fs.rename('test.txt','test2.txt',(err)=> {
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed file');
// })


// apend data to file
// fs.appendFile('test2.txt',', I hope you are doing well',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// });


// delete file
fs.unlink('test2.txt', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully deleted the file');
})