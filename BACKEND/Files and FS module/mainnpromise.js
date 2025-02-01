import fs from "fs/promises"
await fs.appendFile("Bhino.txt"," and I am Gay")
let a = await fs.readFile("Bhino.txt","utf8");
console.log(a)


import { fileURLToPath } from "url";    
import { dirname } from "path"; 
import path from 'path'
console.log(path)
// console.log(fileURLToPath(import.meta.url))
// console.log(dirname(fileURLToPath(import.meta.url)))