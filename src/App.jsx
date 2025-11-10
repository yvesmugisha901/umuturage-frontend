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
      <Routes>
        {/* Public Pages */}
        <Route 
          path="/" 
          element={<><Navbar /><Home /><Footer /></>} 
        />
        <Route 
          path="/register" 
          element={<><Navbar /><Register /><Footer /></>} 
        />
        <Route 
          path="/login" 
          element={<><Navbar /><Login /><Footer /></>} 
        />

        {/* Dashboard Pages */}
        <Route 
          path="/dashboard/district" 
          element={<><Navbar /><DistrictDashboard /><Footer /></>} 
        />

      </Routes>
    </Router>
  );
}

export default App;
