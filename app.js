const fs = require('fs');

//create folder
// fs.mkdir('tutorial',(err) =>{
//     if(err)
//         console.log(err);
//     else{
//         // create new file in tutorial folder 
//         fs.writeFile('./tutorial/test.txt','hi omar!', (err)=>{
//             if(err)
//                 console.log(err);
//             else {
//                 console.log('successfully created file');
//             }
//         })
//     }
// })


// to delete folder if it have one file only

// fs.unlink('./tutorial/omar.txt',(err)=>{
//         if(err)
//             console.log(err);
//         else {
//             fs.rmdir('tutorial',(err)=>{
//                 if (err)
//                     console.log(err);
//                 else{
//                     console.log('successfully deleted folder');
//                 }
//             });
//         }
// });



// to delete folder if it have more than one file 
//1st delete all files in folder/directory
fs.readdir('tutorial',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for (let file of files){
            fs.unlink('./tutorial/'+ file ,(err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('file ' + file + ' has been removed from folder');
                }
            })
        }
    }
})

//2nd then remove the folder 
fs.rmdir('tutorial',(err)=>{
        if (err)
            console.log(err);
        else{
            console.log('successfully deleted folder');
        }
});