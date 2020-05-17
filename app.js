const EventEmitter = require('events');
const eventEmitter = new EventEmitter();



eventEmitter.on('tutorial', (num1 ,num2)=>{
    console.log(num1 + num2);
});

// the event triggired whenever call emit()
eventEmitter.emit('tutorial',(1,2));

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}


let omar = new Person('Omar');
let moh = new Person('Moh');

omar.on('name', () =>{
    console.log('my name is ' + omar.name);
});
moh.on('name', () =>{
    console.log('my name is ' + moh.name);
});
omar.emit('name');
moh.emit('name');






