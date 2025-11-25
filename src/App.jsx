// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebars/Sidebar";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

// Dashboards
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";
import SectorDashboard from "./pages/dashboards/SectorDashboard";
import CellDashboard from "./pages/dashboards/CellDashboard";
import IsiboDashboard from "./pages/dashboards/IsiboDashboard";
import VillageDashboard from "./pages/dashboards/VillageDashboard";

// Isibo Pages
import AddHousehold from "./pages/isibo/AddHousehold";
import HouseholdsList from "./pages/isibo/HouseholdsList";
import IsiboReports from "./pages/isibo/Reports";
import IsiboNotifications from "./pages/isibo/Notifications";
import IsiboSettings from "./pages/isibo/Settings";
import IsiboCalendar from "./pages/isibo/Calendar";

// Cell Pages
import ManageIsibos from "./pages/cell/ManageIsibos";
import ApproveIsiboData from "./pages/cell/ApproveIsiboData";
import CellReports from "./pages/cell/CellReports";
import CellNotifications from "./pages/cell/CellNotifications";
import CellSettings from "./pages/cell/Settings";
import CellCalendar from "./pages/cell/Calendar";

// Sector Pages
import SectorReports from "./pages/sector/Reports";
import SectorNotifications from "./pages/sector/Notifications";
import SectorSettings from "./pages/sector/Settings";
import SectorCalendar from "./pages/sector/Calendar";
import ManageCells from "./pages/sector/ManageCells";
import ApproveCellData from "./pages/sector/ApproveCellData";

// District Pages
import DistrictReports from "./pages/district/Reports";
import DistrictNotifications from "./pages/district/Notifications";
import DistrictSettings from "./pages/district/Settings";
import DistrictCalendar from "./pages/district/Calendar";
import ManageSectors from "./pages/district/ManageSectors";
import DistrictStatistics from "./pages/district/DistrictStatistics";

// Village Pages
import VillageReports from "./pages/village/Reports";
import VillageNotifications from "./pages/village/Notifications";
import VillageCalendar from "./pages/village/Calendar";
import ApproveVillageData from "./pages/village/ApproveData";
import VillageSettings from "./pages/village/Settings";

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
import "./styles/villageDashboard.css";
import "./styles/villagePages.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* PUBLIC PAGES */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
          <Route path="/logout" element={<Logout />} />

          {/* =================== ISIBO DASHBOARD =================== */}
          <Route path="/dashboard/isibo" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><IsiboDashboard /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/add-household" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><AddHousehold /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/households" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><HouseholdsList /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/reports" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><IsiboReports /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/notifications" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><IsiboNotifications /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/settings" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><IsiboSettings /><Footer /></div></div>} />
          <Route path="/dashboard/isibo/calendar" element={<div className="page-with-sidebar"><Sidebar level="isibo" /><div className="dashboard-main"><IsiboCalendar /><Footer /></div></div>} />

          {/* =================== VILLAGE DASHBOARD =================== */}
          <Route path="/dashboard/village" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><VillageDashboard /><Footer /></div></div>} />
          <Route path="/dashboard/village/reports" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><VillageReports /><Footer /></div></div>} />
          <Route path="/dashboard/village/notifications" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><VillageNotifications /><Footer /></div></div>} />
          <Route path="/dashboard/village/calendar" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><VillageCalendar /><Footer /></div></div>} />
          <Route path="/dashboard/village/approvals" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><ApproveVillageData /><Footer /></div></div>} />
          <Route path="/dashboard/village/settings" element={<div className="page-with-sidebar"><Sidebar level="village" /><div className="dashboard-main"><VillageSettings /><Footer /></div></div>} />

          {/* =================== CELL DASHBOARD =================== */}
          <Route path="/dashboard/cell" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><CellDashboard /><Footer /></div></div>} />
          <Route path="/dashboard/cell/isibos" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><ManageIsibos /><Footer /></div></div>} />
          <Route path="/dashboard/cell/approvals" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><ApproveIsiboData /><Footer /></div></div>} />
          <Route path="/dashboard/cell/reports" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><CellReports /><Footer /></div></div>} />
          <Route path="/dashboard/cell/notifications" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><CellNotifications /><Footer /></div></div>} />
          <Route path="/dashboard/cell/settings" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><CellSettings /><Footer /></div></div>} />
          <Route path="/dashboard/cell/calendar" element={<div className="page-with-sidebar"><Sidebar level="cell" /><div className="dashboard-main"><CellCalendar /><Footer /></div></div>} />

          {/* =================== SECTOR DASHBOARD =================== */}
          <Route path="/dashboard/sector" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><SectorDashboard /><Footer /></div></div>} />
          <Route path="/dashboard/sector/reports" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><SectorReports /><Footer /></div></div>} />
          <Route path="/dashboard/sector/notifications" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><SectorNotifications /><Footer /></div></div>} />
          <Route path="/dashboard/sector/settings" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><SectorSettings /><Footer /></div></div>} />
          <Route path="/dashboard/sector/calendar" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><SectorCalendar /><Footer /></div></div>} />
          <Route path="/dashboard/sector/cells" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><ManageCells /><Footer /></div></div>} />
          <Route path="/dashboard/sector/approvals" element={<div className="page-with-sidebar"><Sidebar level="sector" /><div className="dashboard-main"><ApproveCellData /><Footer /></div></div>} />

          {/* =================== DISTRICT DASHBOARD =================== */}
          <Route path="/dashboard/district" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictDashboard /><Footer /></div></div>} />
          <Route path="/dashboard/district/reports" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictReports /><Footer /></div></div>} />
          <Route path="/dashboard/district/notifications" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictNotifications /><Footer /></div></div>} />
          <Route path="/dashboard/district/settings" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictSettings /><Footer /></div></div>} />
          <Route path="/dashboard/district/calendar" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictCalendar /><Footer /></div></div>} />
          <Route path="/dashboard/district/sectors" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><ManageSectors /><Footer /></div></div>} />
          <Route path="/dashboard/district/statistics" element={<div className="page-with-sidebar"><Sidebar level="district" /><div className="dashboard-main"><DistrictStatistics /><Footer /></div></div>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
