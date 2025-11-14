import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Dashboards
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";
import SectorDashboard from "./pages/dashboards/sectordashboard";
import CellDashboard from "./pages/dashboards/Celldashboard";
import IsiboDashboard from "./pages/dashboards/isibodashboard";

// Styles
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/register.css";
import "./styles/login.css";
import "./styles/districtDashboard.css";
import "./styles/sectorDashboard.css";
import "./styles/cellDashboard.css";
import "./styles/isiboDashboard.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Pages with Navbar */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />

          {/* Dashboard Pages with Sidebar + Footer */}
          <Route path="/dashboard/district" element={<DistrictDashboard />} />
          <Route path="/dashboard/sector" element={<SectorDashboard />} />
          <Route path="/dashboard/cell" element={<CellDashboard />} />
          <Route path="/dashboard/isibo" element={<IsiboDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
