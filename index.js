const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const foodSchema = new mongoose.Schema({
    name:String,
    calories:Number,
    protein:Number,
    carbs:Number,
    fats:Number,
    fibre:Number,
    weight:Number,
})

const foodModel = new mongoose.model("foods",foodSchema);

mongoose.connect("mongodb://127.0.0.1:27017/nutrition",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected");
})


app.post("/food/create", (req,res)=>{
    const food = req.body;

    let foodObj  =new foodModel(food);
    foodObj.save().then(()=>{
    res.send({status:"food stored"});
});

//app.get("/demo", (req,res)=>{
   // console.log("get request called");
   // res.send("request sent");
//});

//app.listen(8000);