import axios from 'axios';
import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function ContactList() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ search input

  // Fetch all contacts from backend
  const AllContacts = async () => {
    const response = await axios.get("http://localhost:8080");
    setContacts(response.data);
  };

  useEffect(() => {
    AllContacts();
  }, []);

  // Delete contact and refetch
  const DeleteContact = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    AllContacts();
  };

  // Filter contacts based on searchTerm
  const filteredContacts = searchTerm.trim()? contacts.filter((con) => {
    const q = searchTerm.toLowerCase();
    return (
      con.name.toLowerCase().includes(q) ||
      con.email.toLowerCase().includes(q) ||
      con.phone.includes(q)
    );
  }):contacts;

  return (
    <div className="p-6">
      {/* Top Bar with Add and Search */}
      <div className='flex justify-between items-center mb-6 mx-2'>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-1/2"
        />
        <Button variant="contained" onClick={() => navigate("/create")}>
          Add Contact
        </Button>
      </div>

      {/* Contact Cards */}
      <div className='flex flex-wrap gap-4'>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((con) => (
            <ContactCard
              key={con._id}
              name={con.name}
              email={con.email}
              phone={con.phone}
              id={con._id}
              onDelete={() => DeleteContact(con._id)}
            />
          ))
        ) : (
          <div className="text-gray-500 mt-4">No contacts found.</div>
        )}
      </div>
    </div>
  );
}
