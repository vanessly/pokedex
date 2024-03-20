// Grid.jsx
import React, { useState, useEffect } from "react";
import '../assets/styles/Grid.css';

function Grid() {
  return (
    <div className="Grid">
        <div className="gallery">
            <div className="card">
                <h3>#001</h3>
            </div>
            <div className="card">
                <h3>#002</h3>
            </div>
        </div>
    </div>
  );
}

export default Grid;