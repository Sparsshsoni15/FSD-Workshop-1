/* CRUD: Create, Read, Update, Delete
Types of CRUD: 1. Asynchronous (Async) 2. Synchronous (Sync)
Synchronous (Sync) - Blocking Code
Asynchronous (Async) - Non-Blocking Code
                    -->It's Methods: 1. Callback based method 2. Promises based method */

import fs from 'fs'

//Create the file using fs module
fs.writeFileSync("notes.txt", "Hello World")

//Read the file using fs module
const data= fs.readFileSync("notes.txt", "utf-8")
console.log("Data: ", data);

//Update the file using fs module
fs.appendFileSync("notes.txt", " Hello World, Welcome to JavaScript")

//Delete the file using fs module
fs.rmSync("notes.txt")
