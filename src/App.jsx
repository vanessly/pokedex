// App.jsx
import 'normalize.css';
import React, { useState, useEffect } from "react";
import './assets/styles/App.css';
import Header from './components/Header'
import About from './components/About'
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Grid />
    </div>
  );
}

export default App;