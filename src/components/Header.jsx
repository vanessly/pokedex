// Header.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="Header">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;