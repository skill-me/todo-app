import express from "express";
// database path not imported properly. Hence corrected...
import Todo from "../database/db";

const app = express();
app.use(express.json())

app.get("/", async (req, res) => {
    const response = await Todo.find({});
    // console.log(response)
    res.json(response)
})

app.post('/newtodo', async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let status = req.body.status;

    // enter the values in the database as per the schema defined for the database
    await Todo.create({ title, description, completed: status })
    // always send a response back to the frontend server else the req will hung untill no response is send 
    res.status(200).json({ msg: "todo created successfully" })
})

app.put('/completed', async (req, res) => {
    let title = req.body.title;
    let status = req.body.status;

    // findone syntax is wrong. It should be declared in PascalCase
    let todo = await Todo.findOne({ title });
    let id = todo._id;
    // same issue here "PascalCase"
    // await Todo.updateone({_id : id},{$set:{status}})
    await Todo.updateOne({ _id: id }, { $set: { completed: status } })  //syntax issue:: {$set : {field : updated_value}}

    // here also the same issue no response is being send 
    res.status(200).json({ msg: "todo completed" })
})

app.listen(3000);