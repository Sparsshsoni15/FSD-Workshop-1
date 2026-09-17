function getUser(){
const userData= new Promise((resolve, reject) => {
    let user= true
    if(!user){
        reject(new Error("User not found"));
    } else {
        resolve({
            name: "Sparsh",
            age: 25,
            email: "sparsh@example.com"
        })
    }
})
return userData;
}

async function fetchUser(){
const response= await getUser()
console.log(response);
}
fetchUser();
console.log("Hello");