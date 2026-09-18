import eventEmitter from "node:events";

const emitter = new EventEmitter();

// Register Event
emitter.on("OrdderPlaced",(orderName, value)=>{
    console.log("Order $(orderNmae) has been placed successfully");
})
emitter.on("OrderPlaced", ()=>{
    console.log('Invetory Updated');
})

//Trigger the event
emitter.emit("OrdderPlaced", "iPhone 18", 159000)
emitter.listenerCount("OrderPlaced")
emitter