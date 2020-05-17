const sum = (a,b) => a+b; 
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('created new object');
    }
}
// ugly syntex


/** 
module.exports.sum = sum; 
module.exports.PI =PI;
module.exports.SomeMathObject= SomeMathObject;
*/


// more readable code, and the same code above

module.exports ={sum: sum, PI:PI, SomeMathObject:SomeMathObject}