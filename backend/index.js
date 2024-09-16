import express from "express";
import zod from "zod";
import Creater from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req,res)=>{
    const response = await Creater.find();
    console.log(response)
    res.json(response)
    })

app.post('/new', async (req,res)=>{
    let title = req.body.title;
    console.log(title);
    let description = req.body.description;
    let status = req.body.status;
    console.log('hell owlrd')
    await Creater.create({title, description, "completed" : status});
    res.status(200).json({msg :" your todo is being added successfuly"});

})

app.put('/completed',async (req,res)=>{
    let title = req.body.title;
    console.log(title);
    let status = req.body.status;

    let specific = await Todo.findOne({title});
    let id = specific._id;
    await Todo.updateone({_id : id},{ $set :{status:"completed"}})
    res.status(200).json({ msg: "todo completed" })
})

app.listen(3000);