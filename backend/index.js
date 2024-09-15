import express from "express";
import zod from "zod";
import Todo from "/Users/satyathacker/Downloads/assignments-master/01-js/timepass/To-Do list/database/db.js";

const app = express();
app.use(express.json())

app.get("/", async (req,res)=>{
    const response = await Todo.find();
    res.json(response)
    })

app.post('/newtodo', (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let status = req.body.status;

    const newTodo = new Todo ({
        title,
        description,
        status
    })
})

app.put('/completed',async (req,res)=>{
    let title = req.body.title;
    let status = req.body.status;

    let specific = await Todo.findone({title});
    let id = specific._id;
    await Todo.updateone({_id : id},{$set:{status}})

})

app.listen(3000);