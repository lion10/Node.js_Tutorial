

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// 1st way: 4 test case passed
// var encryptThis = function(text) {
    
//     // Implement me! :)
//     var word = [];
//     var result ="";
//     word = text.split(' ');
//     for(var m = 0 ; m < word.length ; m++){
//         if (m != word.length-1)
//             result += encryptWord(word[m])+" ";
//         else 
//             result += encryptWord(word[m]);
//     }
//     return result; 
// }

// var encryptWord = (text) => {
//     var result = text.charCodeAt(0); 
//     result += text.charAt(text.length-1);
//     for(var i =2; i < text.length-1 ;i++){
//          result += text.charAt(i); 
//     }
//     result += text.charAt(1);
//     return result;
// }

// console.log(encryptThis("hello world"));


// 2nd way:   All of the tests passed! :)
var encryptThis = function(text) {
    let result = [];
    
    var encryptWord =(arr) =>{ 
        let secLetter = arr[1];
        arr[0] = arr[0].charCodeAt(0);
        arr[1] = arr[arr.length-1];
        arr[arr.length-1] = secLetter; 
        result.push(arr.join(''));
    }   

    text = text.split(' ');
    text.forEach(word => {
        word = word.split('');
        encryptWord(word); 
    });
    return result.join(' '); 
}

console.log(encryptThis("hello world"));