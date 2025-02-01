const express = require('express')
const app = express()
const port = 3000
// app.use(express.static('templates'))
app.set('view engine','ejs');

app.get('/', (req, res) => {
    let name = "Bhino";
    let search = "Search Here"
  res.render('index',{name:name , search:search})
})
app.get('/blog', (req, res) => {
    let blogtitle = "Adidas";
    let content = "Hi this is Adidas"
  res.render('blog',{blogtitle:blogtitle,content:content})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})