const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://skillme7777:wVYtb5KUrg6XkZ2C@cluster0.eks1t.mongodb.net/to-do-list");

const todo_Schema = mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean 
})

const Todo = mongoose.model('to-do-list', todo_Schema);
module.exports = Todo;