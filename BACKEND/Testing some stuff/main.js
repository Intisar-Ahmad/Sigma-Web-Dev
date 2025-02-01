const express = require('express');
const fs = require('fs')
const app = express();

// app.use(express.static('public'))

app.get('/',(req,res)=>{
   res.send("Please add /download to the url to download the file");
})
// app.get('/download',(req,res)=>{
//     let filename = __dirname + '/bhino.txt';
//     res.download(filename,'bhino.txt',(err)=>{
//         if(err){
//             console.log("An error occured sorry ",err)
//         }
//     })
// })

app.listen(3000,()=>{
    console.log("App running at 3000");
})