const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            Customer_Name: "Sparsh",
            Location: "Ghaziabad",
            Order_Number: "225506"
        });
    } else {
        reject("Error: Order not fetched");
    }
});

const promise2 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve({
            Customer_Name: "Priyansh",
            Location: "Ghaziabad",
            Order_Number: "215006"
        });
    } else {
        reject("Error: Order not fetched");
    }
});

// Promise.all([promise1, promise2])
//     .then((responses) => {
//         console.log("All promises resolved successfully");
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log("One or more promises failed");
//         console.log(error);
//     });

// Promise.race([promise2, promise1])
//     .then((responses) => {
//         console.log("All promises resolved successfully");
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log("One or more promises failed");
//         console.log(error);
//    });

// Promise.allSettled([promise1, promise2])
//     .then((responses) => {
//         console.log("All promises resolved successfully");
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log("One or more promises failed");
//         console.log(error.message);
//    });

// Promise.allSettled([promise1, promise2])
//     .then((responses) => {
//         console.log("All promises resolved successfully");
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log("One or more promises failed");
//         console.log(error.message);
//    });

Promise.allSettled([promise1, promise2])
    .then((responses) => {
        return responses
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("One or more promises failed");
        console.log(error.message);
    });