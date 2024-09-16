import mongoose from "mongoose";
import { string } from "zod";

mongoose.connect("mongodb+srv://skillme7777:wVYtb5KUrg6XkZ2C@cluster0.eks1t.mongodb.net/to-do-list");

const todo_Schema = mongoose.Schema({
    title : String,
    description: String,
    completed : String,
})

const Creater = mongoose.model('to-do-list', todo_Schema);
export default Creater;

