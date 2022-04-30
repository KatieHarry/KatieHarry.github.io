import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

function Contact () {

  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltx1d6d', 'template_kqm37sf', form.current, 'Y86MG6DPdO2jv7fq7')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  if (submitted) {
    return(
      <section className="contact-wrap">Thank you! Your message has been sent and I'll get back to you as soon as I can.</section>
    )
  }
  else {
    return (
      <section id="Contact" className="contact-wrap">
        <form
          ref={form}
          onSubmit={sendEmail}
          method="POST"
          target="_blank"
        >
          <section className="name-email-wrap">
            <div className="contact-name">
              <input
                type="text"
                placeholder="Your name"
                name="from_name"
                className="form-input"
                required
              />
            </div>
            <div className="contact-email">
              <input
                type="email"
                placeholder="Email"
                name="from_email"
                className="form-input"
                required
              />
            </div>
          </section>
          <div className="contact-subject">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-input"
              required
            />
          </div>
          <div className="contact-message">
            <textarea
              placeholder="Message"
              name="message"
              className="form-input"
              required
            />
          </div>
          <input
            className="send-button btn btn-outline-secondary"
            type="submit"
            value="Send message"
          />
        </form>
      </section>
    )
  }
}

export default Contact;
