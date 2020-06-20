let count = 0; 

const inc = () => count++;
const dec = () => count--;

function getCounter(){
    return count;
}

module.exports= {
    inc,
    dec,
    getCounter
}