import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from "../utils/helpers";

export const ContactForm = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wzykamv', 'template_00n08sl', form.current, 'qj0OIOb_YfEd8KKeP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    };

  return (
    <section>
        <article id='contact-me'>
    <h1 data-testid="h1tag">Contact me</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="Name" onBlur={handleChange}/>
      <label>Email</label>
      <input type="email" name="Email" onBlur={handleChange}/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" onBlur={handleChange}/>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </form>
    </article>
    </section>
  );
};

export default ContactForm;