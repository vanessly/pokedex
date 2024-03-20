// About.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/About.css';
import LoveBall from '../assets/images/loveball.png';

function About() {
  return (
    <div className="About">
        <div className="container">
            <img src={LoveBall} className="pokeball" alt="Pokeball" />
            <h1>Being an avid Pokemon fan since childhood, here is a mini Pokédex of my all-time favorite Pokemon. Click on each card to learn more about that Pokemon. Enjoy!</h1>
        </div>
    </div>
  );
}

export default About;