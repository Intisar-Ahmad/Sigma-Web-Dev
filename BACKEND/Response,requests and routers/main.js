const express = require('express');
const blog = require('./routes/blog') 
// const bhino = require('./routes/bhino')
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/blog',blog)
// app.use('/bhino',bhino)
app.get('/', (req, res) => {
    console.log("This is a get request");
    res.send("Hello World Get\n");
});
app.get('/index', (req, res) => {
    console.log("This is Index");
    res.sendFile("templates/index.html", { root: __dirname });
});
app.get('/api', (req, res) => {  
    res.jsonp({ a: 1, b: 2, bhino: "hi", c: "hello", x: "heavyDuty" });
});

app.post('/', (req, res) => {
    console.log("This is a post request");
    res.send("Hello World Post\n");
});

app.put('/', (req, res) => {
    console.log("This is a put request");
    res.send("Hello World Put\n");
});
app.delete('/', (req, res) => {
    console.log("This is a delete request");
    res.send("Hello World delete\n");
});

app.listen(port, () => {
    console.log("App running at 3000");
})



