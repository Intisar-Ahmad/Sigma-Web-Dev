import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
let homepath = dirname(fileURLToPath(import.meta.url));
let files = await fs.readdir(homepath +'/files');
// console.log(files)
for (const file of files) {
    let ext = file.split('.')[file.split('.').length - 1];
    await fs.mkdir('./routes/'+ext,{recursive:true},(err)=>{
        if(err){
            console.log("An error occureed",err);
        }
        else{
            console.log("Good to go!!!");
        }
    });
}

let routes = await fs.readdir(homepath+'/routes');
console.log(routes)
for (const file of files) {
    for (const route of routes) {
        if(file.includes(route)){
           fs.rename(homepath +'/files/'+file,homepath + '/routes/' + route +'/' + file,(err)=>{
            if(err){
                console.log("There was an error transferring files",err);
            }
           })
        }
    }
}
