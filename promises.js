// Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.
/* Types of promises 
1. Pending- The promise is not yet resolved or rejected.
2. Resolved or Fulfilled- The promise has been resolved successfully.
3. Rejected- The promise has been rejected with an error.
*/
const promise1= new Promise((resolve, reject)=>{
    let success= true;
    if(success){
        resolve({
            username: "Sparsh",
            location: "India"
        })
    }
        else{
            reject("Error: User not found");
        }
        })
        console.log(promise1);

        promise1.then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })

        //Weather Application using promises and api fetching