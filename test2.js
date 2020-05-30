let arr = {'a' : 1, 'e': 2 ,'i': 3, 'o': 4 ,'u': 5};

function encode(string) {
        
    let result =[]; 
    for (let i = 0; i < string.length; i++){
            if(string.charAt(i) === 'a')
                result.push(1);
            else if(string.charAt(i) === 'e')
                result.push(2);
            else if(string.charAt(i) === 'i')
                result.push(3);
            else if(string.charAt(i) === 'o')
                result.push(4);
            else if(string.charAt(i) === 'u')
                result.push(5);
            else 
                result.push(string.charAt(i));
        }
    return result.join('');
  }
  
  console.log(encode('hello'))

function decode(string) {
    let result =[]; 
    for (let i = 0; i < string.length; i++){
            if(string.charAt(i) === '1')
                result.push('a');
            else if(string.charAt(i) === '2')
                result.push('e');
            else if(string.charAt(i) === '3')
                result.push('i');
            else if(string.charAt(i) === '4')
                result.push('o');
            else if(string.charAt(i) === '5')
                result.push('u');
            else 
                result.push(string.charAt(i));
        }
    return result.join('');
}

console.log(decode('h2ll4'))