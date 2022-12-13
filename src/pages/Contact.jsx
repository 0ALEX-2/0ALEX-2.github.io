import React from "react";
import "./contact.css";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <hr />
      <h3>Get in touch</h3>
      <div className="contact_container">
     
      <div
          className="contact_form"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
           
          <form
            action="https://formspree.io/f/xaykrajo"
            method="POST"
            className="FORM"
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              autoComplete="off"
              cols="30"
              rows="10"
              placeholder="Message.."
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="details" data-aos="fade-right" data-aos-duration="1000">
         
          <p>Email : sakilahmed965@gmail.com</p>
          <p>Phone : +91-8967834909</p>
          <div className="contact_logos" data-aos="zoom-in">
            <a href="https://github.com/0ALEX-2" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/%F0%9D%99%BC%F0%9D%99%B3-sakil-ahmed-780321226/"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a href="https://twitter.com/MdSakil34630193" target="_blank">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
        
      </div>
      <hr />
    </div>
  );
};

export default Contact;
