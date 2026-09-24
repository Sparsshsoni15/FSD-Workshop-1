import EventEmitter from "node:events";

const emitter = new EventEmitter()

// Register Event
emitter.on("OrderPlaced",(orderName, orderPrice)=>{
    console.log(`Order ${orderName} and Price: ${orderPrice} placed successfully`); // ` > Template Literal
})



emitter.on("OrderPlaced", ()=>{
    console.log("Notification sent to the user");
})
emitter.on("OrderPlaced", ()=>{
    console.log("Email sent to the user");
})
emitter.on("OrderPlaced", ()=>{
    console.log("Inventory updated");
})

//Trigger the event
emitter.emit("OrderPlaced", "iPhone", 158000);