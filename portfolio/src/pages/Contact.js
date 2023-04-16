import React from 'react';
import '../styles/Contact.css';

// if field is blank, notify that it is required field
// notify if email is invalid

function Contact() {
  return (
    <div className="contact">
      <div className="contactbody">
        <div className="container">
          <div className="container">
            <h1> Contact Me</h1>
            <form id="contact-form">
              <input placeholder="name" required></input>
              <input placeholder="email" required></input>
              <input placeholder="message" type="text" required></input>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
