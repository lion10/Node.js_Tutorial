const fs = require('fs');

const readStream = fs.createReadStream('./test1.txt','utf8');
const writeSream = fs.createWriteStream('test2.txt')


// I use readStream becuse it uses full buffer which need to be big enough ( esspicay when i have alot of data like  2 giga)
readStream.on('data',(chunk)=> {
    // console.log(chunk);
    writeSream.write(chunk);
})