// node js asynchronsously by evnet listener

const questions = [
    "what are u doing",
    "how are u",
    "your name plz"
]
const ask = (num = 0) => {
    process.stdout.write(`\n\n\n ${questions[num]}`);
    process.stdout.write(` > `)
}

ask();

const answers = []

process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length)
        ask(answers.length)
    else 
        process.exit();
});


// to handle exit

process.on("exit",() =>{
        const[doing,fine,name] = answers
        console.log(
            `
            ${doing},then are you okay 
            ${fine}, your name
            ${name},thanks  
            `
        )
})