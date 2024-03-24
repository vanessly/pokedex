// Header.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="Header">
      <a href="#main" tabIndex="0" className="skip">Skip to Main Content</a>
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;