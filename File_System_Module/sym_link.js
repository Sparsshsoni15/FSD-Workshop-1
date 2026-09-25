import fs from 'fs'

fs.symlink("user.txt", "link.txt", (err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Symbolic Link Created");
})