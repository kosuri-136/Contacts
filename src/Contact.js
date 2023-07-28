// Contact.js
import React, { useState } from 'react';

const Contact = ({ contact }) => {
  const [showAge, setShowAge] = useState(false);

  const handleShowAge = () => {
    setShowAge((prevShowAge) => !prevShowAge);
  };

  return (
    <center>
    <div className="contact-container">
      <img className="contact-image" src={contact.picture.medium} alt={contact.name.first} />
      <div className="contact-details">
        <p className="contact-name">
          {contact.name.first} {contact.name.last}
        </p>
        <p className="contact-info">Email: {contact.email}</p>
        <p className="contact-info">Phone: {contact.phone}</p>
        {showAge && <p className="contact-info">Age: {contact.dob.age}</p>}
        <button className="show-age-button" onClick={handleShowAge}>
          {showAge ? 'Hide Age' : 'Show Age'}
        </button>
      </div>
    </div>
    </center>
  );
};

export default Contact;

