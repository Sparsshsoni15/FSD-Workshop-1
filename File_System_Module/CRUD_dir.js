import fs from 'fs'

//  fs.mkdir("myFolder", (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Folder Created");
// })

fs.readdir("myFolder", (err, files)=>{
    if(err){
        console.log(err);
        return
    }   
    console.log("Files: ", files);
})  