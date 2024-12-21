import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import Header from "./Header";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_qent0fi",
        "template_js9t638",
        formState,
        "OKjWWXpWflgV2_Zco"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("An error occurred, Please try again");
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="contact-section">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Why are you contacting me?</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/uday-kiran-sp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/spudaykiran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a href="tel:+1234567890">
            <FaPhoneAlt /> +91 630 424 3476
          </a>
          <a href="mailto:udaykiranreddysp25@gmail.com">
            <FaEnvelope /> udaykiranreddysp25@gmail.com
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactMe;
