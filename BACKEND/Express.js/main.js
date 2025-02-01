const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.setHeader("Content-type","text/html")
  res.send('<h1>BHINO</h1>')
})
app.get('/about', (req, res) => {
    res.setHeader("Content-type","text/html")
  res.send('<h1>BHINOabout</h1>')
})
app.get('/blog/:slug', (req, res) => {
    res.setHeader("Content-type","text/html")
  res.send(`hello to ${req.params.slug}`)
  console.log(req.params);
  console.log(req.query);
})

app.get('/contact', (req, res) => {
    res.setHeader("Content-type","text/html")
  res.send('<h1>BHINOContact</h1>')
})
app.get('/learn%20more', (req, res) => {
    res.setHeader("Content-type","text/html")
  res.send('<h1>BHINOiscool</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log(`http://127.0.0.1:3000`)
