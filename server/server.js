const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const Contact=require("./models/contact");



main().then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contacts');
}

const corsOptions={
    origin:['http://localhost:5173'],
};

app.use(cors(corsOptions));

app.get("/",async(req,res)=>{
    const result=await Contact.find({});
    res.json(result);
});

app.delete("/delete/:id",async(req,res)=>{
    const updatedList=await Contact.findByIdAndDelete(req.params.id);
    res.json(updatedList);
});

app.post("/create",async(req,res)=>{
    
});

app.listen(8080,()=>{
    console.log("App is listening on port 8080");
});