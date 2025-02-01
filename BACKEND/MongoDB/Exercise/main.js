const express = require('express') 
const mongoose = require('mongoose')
const Employee = require('./models/Employee.js')
const fs = require('fs')
const app = express()
const port = 3000

async function connecttoDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/company');
}
connecttoDB();

app.set('view engine','ejs')
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/generate', async (req, res) => {
   let a =  fs.readFileSync('./employees.json','utf-8',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("read");
        }
    })
 
   
    for (const employee in JSON.parse(a)) {
       console.log(JSON.parse(a)[employee])
       let e = new Employee(JSON.parse(a)[employee]);
       e.save();
    }
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})