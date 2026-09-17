// Synchronous
console.log("Start");
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("End");

// Asynchronous
console.log("Async Start");
setTimeout(() => {
    console.log("Settimeout");
}, 2000)
console.log("Async End");
