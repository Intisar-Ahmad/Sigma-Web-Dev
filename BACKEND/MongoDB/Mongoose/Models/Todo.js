import mongoose from "mongoose"
import { boolean } from "webidl-conversions"

const schema = new mongoose.Schema({
    name:{type:String,required:true,default:"Bhino"},
    desc:String,
    is_done:Boolean,
    days: Number
})

 export const Todo = mongoose.model("Todo",schema)