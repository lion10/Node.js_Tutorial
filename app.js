const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const num1 = Math.floor( Math.random()*10 + 1);
const num2 = Math.floor( Math.random() *10 + 1);
const answer = num1 + num2; 

rl.question(`What is ${ num1 } + ${ num2 } ? \n`,
    (userInput) =>{
        if(userInput.trim() == answer)
            rl.close();
        else{
            rl.setPrompt('Incorrect respons please try again! \n')
            rl.prompt(); 
            rl.on('line',(userInput)=> {  // line event keep the user in loop until get the right answer
                if(userInput.trim() == answer)
                    rl.close();
                else{
                    rl.setPrompt(`Incorrect respons of ${userInput} please try again! \n`)
                    rl.prompt();
                }
            });
        }
    }
);

rl.on('close', () =>{  // close event when the user submit the right answer will rl close ...
    console.log('correct!!!')
})