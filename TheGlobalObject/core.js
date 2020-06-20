const path = require("path")
const {log} = require("util")
const {getHeapCodeStatistics} = require("v8")


console.log(path.join(__dirname),"Node Global")

// util.log( path.basename(__filename))
// util.log(" the name of the cureent file")

log(getHeapCodeStatistics());