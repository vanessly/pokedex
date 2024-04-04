// App.jsx
import 'normalize.css';
import React, { useState, useEffect } from "react";
import './assets/styles/App.css';
import Header from './components/Header'
import About from './components/About'
import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;