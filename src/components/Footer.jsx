// About.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/Footer.css';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {

  return (
    <div className="Footer">
        <h1>Keep in touch!</h1>
        <p>vanessly@umich.edu</p>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/vanessly/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="mailto:vanessly@umich.edu">
            <FaEnvelope />
          </a>

          <a href="https://github.com/vanessly" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>&copy; 2024 CC Ly. All Rights Reserved.</p>
      </div>
  );
}

export default Footer;