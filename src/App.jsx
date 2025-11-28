// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebars/Sidebar";

// Public pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

// Dashboards
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";
import SectorDashboard from "./pages/dashboards/SectorDashboard";
import CellDashboard from "./pages/dashboards/CellDashboard";
import VillageDashboard from "./pages/dashboards/VillageDashboard";
import IsiboDashboard from "./pages/dashboards/IsiboDashboard";


// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/AdminManageUsers";
import ManageIsibo from "./pages/admin/ManageIsibo";
import ManageVillage from "./pages/admin/AdminManageVillages";
import ManageCell from "./pages/admin/ManageCell";
import ManageSector from "./pages/admin/ManageSector";
import AdminReports from "./pages/admin/AdminReports";
import ManageDistrict from "./pages/admin/ManageDistrict";
import AdminAuditLogs from "./pages/admin/AdminAuditLogs";
import AdminApprovals from "./pages/admin/AdminApprovals";
import AdminCalendar from "./pages/admin/AdminCalendar";
import AdminSystemSettings from "./pages/admin/AdminSystemSettings";

// ISIBO
import AddHousehold from "./pages/isibo/AddHousehold";
import HouseholdsList from "./pages/isibo/HouseholdsList";
import IsiboReports from "./pages/isibo/Reports";
import IsiboNotifications from "./pages/isibo/Notifications";
import IsiboSettings from "./pages/isibo/Settings";
import IsiboCalendar from "./pages/isibo/Calendar";

// Village
import VillageReports from "./pages/village/Reports";
import VillageNotifications from "./pages/village/Notifications";
import VillageCalendar from "./pages/village/Calendar";
import ApproveVillageData from "./pages/village/ApproveData";
import VillageSettings from "./pages/village/Settings";

// Cell
import ManageIsibos from "./pages/cell/ManageIsibos";
import ApproveIsiboData from "./pages/cell/ApproveIsiboData";
import CellReports from "./pages/cell/CellReports";
import CellNotifications from "./pages/cell/CellNotifications";
import CellSettings from "./pages/cell/Settings";
import CellCalendar from "./pages/cell/Calendar";

// Sector
import SectorReports from "./pages/sector/Reports";
import SectorNotifications from "./pages/sector/Notifications";
import SectorSettings from "./pages/sector/Settings";
import SectorCalendar from "./pages/sector/Calendar";
import ManageCells from "./pages/sector/ManageCells";
import ApproveCellData from "./pages/sector/ApproveCellData";

// District
import DistrictReports from "./pages/district/Reports";
import DistrictNotifications from "./pages/district/Notifications";
import DistrictSettings from "./pages/district/Settings";
import DistrictCalendar from "./pages/district/Calendar";
import ManageSectors from "./pages/district/ManageSectors";
import DistrictStatistics from "./pages/district/DistrictStatistics";

// Global Styles
import "./styles/global.css";

// =============================
// REUSABLE DASHBOARD WRAPPER
// =============================
const DashboardLayout = ({ level, children }) => (
  <div className="page-with-sidebar">
    <Sidebar level={level} />
    <div className="dashboard-main">
      {children}
      <Footer />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
          <Route path="/logout" element={<Logout />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<DashboardLayout level="admin"><AdminDashboard /></DashboardLayout>} />
          <Route path="/admin/users" element={<DashboardLayout level="admin"><ManageUsers /></DashboardLayout>} />
          <Route path="/admin/isibos" element={<DashboardLayout level="admin"><ManageIsibo /></DashboardLayout>} />
          <Route path="/admin/villages" element={<DashboardLayout level="admin"><ManageVillage /></DashboardLayout>} />
          <Route path="/admin/cells" element={<DashboardLayout level="admin"><ManageCell /></DashboardLayout>} />
          <Route path="/admin/sectors" element={<DashboardLayout level="admin"><ManageSector /></DashboardLayout>} />
          <Route path="/admin/districts" element={<DashboardLayout level="admin"><ManageDistrict /></DashboardLayout>} />
          <Route path="/admin/approvals" element={<DashboardLayout level="admin"><AdminApprovals /></DashboardLayout>} />
          <Route path="/admin/audit-logs" element={<DashboardLayout level="admin"><AdminAuditLogs /></DashboardLayout>} />
          <Route path="/admin/calendar" element={<DashboardLayout level="admin"><AdminCalendar /></DashboardLayout>} />
          <Route path="/admin/system-settings" element={<DashboardLayout level="admin"><AdminSystemSettings /></DashboardLayout>} />

          {/* ISIBO ROUTES */}
          <Route path="/dashboard/isibo" element={<DashboardLayout level="isibo"><IsiboDashboard /></DashboardLayout>} />
          <Route path="/dashboard/isibo/add-household" element={<DashboardLayout level="isibo"><AddHousehold /></DashboardLayout>} />
          <Route path="/dashboard/isibo/households" element={<DashboardLayout level="isibo"><HouseholdsList /></DashboardLayout>} />
          <Route path="/dashboard/isibo/reports" element={<DashboardLayout level="isibo"><IsiboReports /></DashboardLayout>} />
          <Route path="/dashboard/isibo/notifications" element={<DashboardLayout level="isibo"><IsiboNotifications /></DashboardLayout>} />
          <Route path="/dashboard/isibo/settings" element={<DashboardLayout level="isibo"><IsiboSettings /></DashboardLayout>} />
          <Route path="/dashboard/isibo/calendar" element={<DashboardLayout level="isibo"><IsiboCalendar /></DashboardLayout>} />

          {/* VILLAGE */}
          <Route path="/dashboard/village" element={<DashboardLayout level="village"><VillageDashboard /></DashboardLayout>} />
          <Route path="/dashboard/village/reports" element={<DashboardLayout level="village"><VillageReports /></DashboardLayout>} />
          <Route path="/dashboard/village/notifications" element={<DashboardLayout level="village"><VillageNotifications /></DashboardLayout>} />
          <Route path="/dashboard/village/calendar" element={<DashboardLayout level="village"><VillageCalendar /></DashboardLayout>} />
          <Route path="/dashboard/village/approvals" element={<DashboardLayout level="village"><ApproveVillageData /></DashboardLayout>} />
          <Route path="/dashboard/village/settings" element={<DashboardLayout level="village"><VillageSettings /></DashboardLayout>} />

          {/* CELL */}
          <Route path="/dashboard/cell" element={<DashboardLayout level="cell"><CellDashboard /></DashboardLayout>} />
          <Route path="/dashboard/cell/isibos" element={<DashboardLayout level="cell"><ManageIsibos /></DashboardLayout>} />
          <Route path="/dashboard/cell/approvals" element={<DashboardLayout level="cell"><ApproveIsiboData /></DashboardLayout>} />
          <Route path="/dashboard/cell/reports" element={<DashboardLayout level="cell"><CellReports /></DashboardLayout>} />
          <Route path="/dashboard/cell/notifications" element={<DashboardLayout level="cell"><CellNotifications /></DashboardLayout>} />
          <Route path="/dashboard/cell/settings" element={<DashboardLayout level="cell"><CellSettings /></DashboardLayout>} />
          <Route path="/dashboard/cell/calendar" element={<DashboardLayout level="cell"><CellCalendar /></DashboardLayout>} />

          {/* SECTOR */}
          <Route path="/dashboard/sector" element={<DashboardLayout level="sector"><SectorDashboard /></DashboardLayout>} />
          <Route path="/dashboard/sector/reports" element={<DashboardLayout level="sector"><SectorReports /></DashboardLayout>} />
          <Route path="/dashboard/sector/notifications" element={<DashboardLayout level="sector"><SectorNotifications /></DashboardLayout>} />
          <Route path="/dashboard/sector/settings" element={<DashboardLayout level="sector"><SectorSettings /></DashboardLayout>} />
          <Route path="/dashboard/sector/calendar" element={<DashboardLayout level="sector"><SectorCalendar /></DashboardLayout>} />
          <Route path="/dashboard/sector/cells" element={<DashboardLayout level="sector"><ManageCells /></DashboardLayout>} />
          <Route path="/dashboard/sector/approvals" element={<DashboardLayout level="sector"><ApproveCellData /></DashboardLayout>} />

          {/* DISTRICT */}
          <Route path="/dashboard/district" element={<DashboardLayout level="district"><DistrictDashboard /></DashboardLayout>} />
          <Route path="/dashboard/district/reports" element={<DashboardLayout level="district"><DistrictReports /></DashboardLayout>} />
          <Route path="/dashboard/district/notifications" element={<DashboardLayout level="district"><DistrictNotifications /></DashboardLayout>} />
          <Route path="/dashboard/district/settings" element={<DashboardLayout level="district"><DistrictSettings /></DashboardLayout>} />
          <Route path="/dashboard/district/calendar" element={<DashboardLayout level="district"><DistrictCalendar /></DashboardLayout>} />
          <Route path="/dashboard/district/sectors" element={<DashboardLayout level="district"><ManageSectors /></DashboardLayout>} />
          <Route path="/dashboard/district/statistics" element={<DashboardLayout level="district"><DistrictStatistics /></DashboardLayout>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
