// const http = require('node:http'); This is specifically for cjs
//For mjs syntax we must use
// import http from "node:http"
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/html');
//     res.end('<h1>Bhino</h1>');

// });
// server.listen(port,hostname,()=>{
//     console.log(`Server is running at http://${hostname}:${port}/`)
// })

//Importing Named Exports
// import {a} from "./mymodule.js"
// console.log(a);

//To import a defualt export we use
import obj from "./mymodule.js"
import {e} from "./mymodule.js"
console.log(obj)
console.log(e)

// trying the same thing with cjs
// const obj = require("./mymodule2.js")
// console.log(obj,__dirname,__filename)//These properties are always available because node.js always wraps our modules code in the following function
// (function(exports,module,require,__dirname,__filename){
//     //Module code lives here
// });

// however this is not true in ESM.Therefore we have to us especific methos to access the __dirname and __filename
// to do this we must
// import {fileURLToPath} from "url"
// import {dirname} from "path"

// console.log(fileURLToPath(import.meta.url))
// console.log(dirname(fileURLToPath(import.meta.url)))
