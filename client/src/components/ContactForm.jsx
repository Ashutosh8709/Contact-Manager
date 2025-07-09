import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ContactForm(){
    const navigate = useNavigate();
    const [form,setForm]=useState({name:"",email:"",phone:""});

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/create", form);
    }
    return(
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input" required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input" />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="input" type='number'/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" type='submit' onClick={()=>navigate('/')}>Add Contact</button>

    </form>
    );
}