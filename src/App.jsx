import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";

// Styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/register.css';
import './styles/login.css';
import './styles/districtDashboard.css';

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main page content wrapper */}
      <div className="page-container">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Pages */}
          <Route path="/dashboard/district" element={<DistrictDashboard />} />
        </Routes>
      </div>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
