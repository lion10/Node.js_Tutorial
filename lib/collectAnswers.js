const readline = require("readline");
const {EventEmitter} = require("events")


const questions = [
    "what are u doing ",
    "how are u ",
    "your name plz "
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (qustions, done = f => f)=>{
    const answers =[]
    const [firstQustion] = questions
    const emitter = new EventEmitter();

    const qustionsAnswoerd = answer => {
        emitter.emit("answer", answer);
        answers.push(answer)
        if(answers.length < qustions.length){
            rl.question(questions[answers.length], qustionsAnswoerd);
        }else{
            emitter.emit("complete", answers);
            done(answers)
        }
    }

    rl.question(firstQustion, qustionsAnswoerd);
    return emitter;
     
}

