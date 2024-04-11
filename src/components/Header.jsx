// Header.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png'
import NavBar from './NavBar'


function Header() {
  return (
    <div className="Header">
      <NavBar />
      <a href="#main" tabIndex="0" className="skip">Skip to Main Content</a>
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;