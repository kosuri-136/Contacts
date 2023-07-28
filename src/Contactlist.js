// ContactList.js
import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import "./App.css"
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=15');
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.log('Error fetching contacts:', error);
    }
  };

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact key={contact.login.uuid} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
