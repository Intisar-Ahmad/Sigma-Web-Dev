const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public'))
app.use('/blog', blog);

//Middleware 1
app.use('/',(req, res, next)=> {
    let time = Date.now()
    let date = new Date(time);
    req.bhino = 'HI, I am Bhino And I am supercool'
    console.log(date.toLocaleString())
    fs.writeFile('Data.json',`{"Time":"${Date.now()}","Method":"${req.method}"}`,(err)=>{
      if(err){
        console.log(err," happened")
      }
      else{
        console.log("No error")
      }
    })
    next()
  })

  //Middleware 2
app.use((req, res, next)=> {
    console.log('m2')
    next()
  })


app.get('/', (req, res) => {
  res.send(req.bhino)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})