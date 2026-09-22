import fs from 'fs';
console.log("synchronius Task")

setTimeout(() => {
    console.log("setTimeout");
}, 2000)

setInterval(function(){
    console.log("SetInterval");

}, 2000)

// MicroTask Queue
// nextTick Queue

fs.writeFile("notes.txt", "Hello ELCE- A", function(err){
    if(err) {
        console.log(err);
        return
    }
    setTimeout(() => {
        console.log("setTimeout inside fs write method");
    }, 0)
    setImmediate(() => {
        console.log("setImmediate inside fs write method");
    })

    console.log("File has been written successfully");

})
setImmediate(() => {
    console.log("setImmediate");
})      


console.log("Another Synchronous task")

Promise.resolve().then(()=>{
    console.log("Promise resolved");        
})

process.nextTick(() => {
    console.log("Next Tick");

})