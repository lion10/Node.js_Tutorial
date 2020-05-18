const fs = require('fs');
const zlib = require('zlib');

// 1st example:  to comprized the data
const gzip = zlib.createGzip();

// const readStream1 = fs.createReadStream('./test1.txt','utf8');
// const writeStream1 = fs.createWriteStream('test2.txt.gz');

// // send the data to writeStream file
// // readStream1.pipe(writeStream1);

// // compressed data to new file
// readStream1.pipe(gzip).pipe(writeStream1);


// 2nd example: 
// .gz to make file compressed
const readStream = fs.createReadStream('./test2.txt.gz');
const writeStream = fs.createWriteStream('uncomprizedfile.txt')
// to uncompressed the data
const gunzip = zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream);
