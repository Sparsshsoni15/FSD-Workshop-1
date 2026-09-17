function greet(username, callback){
    console.log("Welcome")
    if(typeof callback === "function") {
        callback(username);
    }
}
greet("Sparsh", (username)=>{
    console.log("Hello, ",username);
});