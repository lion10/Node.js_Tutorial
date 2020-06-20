const event = require("events"); 

const emitter = new event.EventEmitter();

emitter.on("customEvent",(message, user) =>{
    console.log(`${user} : ${message}`)
});

// emitter.emit("customEvent", "hi >>>","Omar");

process.stdin.on("data", data =>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "goodbye!","terminal");
        process.exit();
    }
    emitter.emit("customEvent", input,"terminal");
});