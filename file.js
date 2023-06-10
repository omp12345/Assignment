// process.nextTick()
function delayedFunction() {
    console.log("Delayed function executed.");
  }
  
  console.log("Before calling process.nextTick().");
  process.nextTick(delayedFunction);
  console.log("After calling process.nextTick().");
// process.hrtime()
function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 1000000; i++) {
      sum += i;
    }
    return sum;
  }
  
  const startTime = process.hrtime();
  calculateSum();
  const endTime = process.hrtime(startTime);
  
  const executionTimeInNanoSeconds = endTime[0] * 1e9 + endTime[1];
  console.log(`Execution time: ${executionTimeInNanoSeconds} nanoseconds.`);
//   alculateSum()
const fs = require("fs");

console.log("Start of the main program.");

setTimeout(() => {
  console.log("setTimeout executed.");
}, 0);

setInterval(() => {
  console.log("setInterval executed.");
}, 0);

setImmediate(() => {
  console.log("setImmediate executed.");
});

process.nextTick(() => {
  console.log("process.nextTick executed.");
});

new Promise((resolve) => {
  console.log("Promise executor executed.");
  resolve();
}).then(() => {
  console.log("Promise resolved.");
});

fs.readFile(__filename, () => {
  console.log("File reading completed.");
});

console.log("End of the main program.");

  