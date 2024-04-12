// App.jsx
import 'normalize.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/styles/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Grid from './components/Grid'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <a href="#main" tabIndex="0" className="skip">Skip to Main Content</a>
      <BrowserRouter basename="/si339finalproject">
        <Header />
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
