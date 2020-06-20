const waitTime = 4000
const waitInterval = 1000
let currentTime = 0

const incTime = ()=>{
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) *100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
}

console.log (` delay ${waitTime/ 1000} sec`);

const timeFinished = () => {
    clearInterval(interval)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")
}

const interval = setInterval(incTime,waitInterval)

setTimeout(timeFinished,waitTime);