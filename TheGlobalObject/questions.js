const collectAnswers =require("../lib/collectAnswers")

const questions = [
    "what are u doing ",
    "how are u ",
    "your name plz "
]

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer =>{
    console.log(`qustion answerd ${answer}`);
})

answerEvents.on("complete", answers =>{
    console.log("thank u ");
    console.log(answers);
})

answerEvents.on("complete", () =>{
    process.exit();
})