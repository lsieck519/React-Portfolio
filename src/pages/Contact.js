import React, { useState } from 'react';
import '../styles/Contact.css';

import { validateEmail } from '../helpers/Validation.js';

function Contact() {
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'contactEmail') {
      setContactEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setContactMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(contactEmail)) {
      setSubmitMessage('please enter a valid email address');
      return;
    }
    if (!contactName) {
      setSubmitMessage('please enter your name');
      return;
    }
    if (!contactMessage) {
      setSubmitMessage('please enter a message');
      return;
    } else {
      setSubmitMessage(`Thank you for your message, ${contactName}!`);
    }

    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div className="contact">
      <h1> Contact Me</h1>
      <div className="contact-form-container">
        <form id="contact-form">
          <div className="input-container">
            <input
              value={contactEmail}
              name="contactEmail"
              id="nameid"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={contactName}
              name="contactName"
              id="contactid"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={contactMessage}
              name="contactMessage"
              id="messageid"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
          </div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {submitMessage && (
          <div>
            <p className="submit-message">{submitMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
