console.log(process.pid)
console.log(process.versions.node);

console.log(process.argv) // array

const grab = flag =>{ 
    indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)