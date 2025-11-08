import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";

import './styles/global.css';
import './styles/Navbar.css';
import './styles/Footer.css';
import './styles/register.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Wrap Routes in a page-container */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
