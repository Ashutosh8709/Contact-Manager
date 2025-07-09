import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import ContactCard from './ContactCard';
import Button from '@mui/material/Button';


export default function ContactList(){
    let [contacts,setContacts]=useState([]);
    const AllContacts=async()=>{
        const response = await axios.get("http://localhost:8080");
        setContacts(response.data);
    };

    useEffect(()=>{
        AllContacts();
    },[]);

    const DeleteContact=async(id)=>{
        await axios.delete(`http://localhost:8080/delete/${id}`);
        AllContacts();
    }
    return(
        <div>
        <div className='flex flex-wrap justify-end mt-4'>
             <Button variant="contained">Add Contacts</Button>
        </div>
        <div className='flex flex-wrap gap-4 mt-8'>
            {contacts.map((con)=>(<ContactCard key={con._id} name={con.name} email={con.email} phone={con.phone} id={con._id} onDelete={()=>DeleteContact(con._id)}/>))}
        </div>
        </div>
    );
}