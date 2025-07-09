import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from "react-router-dom";

export default function ContactForm(){
    const {id}=useParams();
    const navigate = useNavigate();
    const [form,setForm]=useState({name:"",email:"",phone:""});

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    useEffect(()=>{const fetchData =async() => {
        await axios.get(`http://localhost:8080/contacts/${id}`).then((res) => {
          setForm(res.data);
        });
      }; fetchData();
    }, [id]);

    const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/edit/${id}`, form);
    }
    return(
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input border border-gray-300 mr-2 rounded" required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input border border-gray-300 mr-2 rounded" />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="input border border-gray-300 mr-2 rounded" type='number'/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" type='submit' onClick={()=>navigate('/')}>Edit Contact</button>

    </form>
    );
}