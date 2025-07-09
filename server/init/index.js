const mongoose=require('mongoose');
const initData=require("./data");
const Contact=require("../models/contact");

main().then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contacts');
}


const initDB=async()=>{
    await Contact.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj}));
    await Contact.insertMany(initData.data);
}


initDB();