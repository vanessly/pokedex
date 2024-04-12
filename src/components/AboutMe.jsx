// AboutMe.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/AboutMe.css';
import cc_img from '../assets/images/cc.png';


function AboutMe() {

  return (
    <div className="AboutMe">
        <div className="about-bg">
            <h1>About Me</h1>
            <div className="about-info">
                <img src={cc_img} alt="CC's Picture"/>
                <p>Hello! My name is CC Ly, and I am a third year studying Computer Science at the University of Michigan! I have been playing watching and playing Pokemon since I was 6 years old, so I wanted to showcase my personal favorites that I’ve gathered over the years. Each Pokemon on here has been on my final team at least once, so they all hold a special place in my heart. I hope you enjoy! </p>
            </div> 
        </div>
    </div>
  );
}

export default AboutMe;