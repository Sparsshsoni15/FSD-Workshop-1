import fs from 'fs';

fs.stat("user.txt", (err, stats)=>{
    if(err){
        console.log(err);
        return;
    }   
    console.log(stats.size);
    console.log(stats.mtime.toISOString());
});