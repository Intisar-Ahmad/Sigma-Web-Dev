const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    salary:Number,
    language: String,
    city:String,
    isManager:Boolean
})

const employee = mongoose.model('Employee',schema);

module.exports = employee;