import mongoose from 'mongoose';
import express from 'express'
import { Todo } from './Models/Todo.js';
let con = await mongoose.connect('mongodb://localhost:27017/todo')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({desc:"Todo is Todo" , is_done:false ,days:4});
    todo.save()
  res.send('Hello World!')
})
app.get('/a', async (req, res) => {
    const todo = await Todo.findOne()
  res.json({name:todo.name,desc:todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})