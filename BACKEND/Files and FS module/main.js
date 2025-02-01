const fs = require('fs')
// console.log(fs)

console.log("Starting");
//The following method is OK but it is synchronous which caan cause issues
// fs.writeFileSync("Bhino.cpp","#include<iostream>\nusing namespace std;\nint main(){\n\nreturn 0;\n}")



// A better way to write something in a file would be to use
// fs.writeFile("Bhino.txt","Hi,this is bhino",()=>{//This is an asyncrhonous or non-blocking method for writing files in node.js
//     console.log("done")
    fs.readFile("Bhino.txt","utf8",(error, data)=>{
        console.log(error,data.toString());
    })
// })
// console.log("End")
fs.writeFile("Bhino.txt","Hi ",()=>{
    
});
//Appending Files
fs.appendFile("Bhino.txt","I am ten years old",(error)=>{
    console.log(error)
})