import EventEmitter from "node:events";

const emitter = new EventEmitter()

emitter.on("login", () => {
    console.log("User Logged In using on() method")
})

emitter.once("login", () => {
    console.log("User Logged In using once() method")
})

console.log("First login");
emitter.emit("login")

console.log("Second login");
emitter.emit("login")

console.log("Third login");
emitter.emit("login")
