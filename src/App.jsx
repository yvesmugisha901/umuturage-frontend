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

// Dashboards
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";
import SectorDashboard from "./pages/dashboards/sectordashboard";
import CellDashboard from "./pages/dashboards/Celldashboard";
import IsiboDashboard from "./pages/dashboards/isibodashboard";

// Isibo Pages
import AddHousehold from "./pages/isibo/AddHousehold";
import HouseholdsList from "./pages/isibo/HouseholdsList";
import Reports from "./pages/isibo/Reports";
import Notifications from "./pages/isibo/Notifications";

// Cell Pages
import ManageIsibos from "./pages/cell/ManageIsibos";
import ApproveIsiboData from "./pages/cell/ApproveIsiboData";
import CellReports from "./pages/cell/CellReports";
import CellNotifications from "./pages/cell/CellNotifications";

// Universal Pages
import Settings from "./pages/Settings";
import CalendarPage from "./pages/Calendar";
import Logout from "./pages/Logout";

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

          {/* PUBLIC PAGES */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />

          {/* DASHBOARDS */}
          {/* Isibo Dashboard */}
          <Route
            path="/dashboard/isibo"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <IsiboDashboard />
                  <Footer />
                </div>
              </div>
            }
          />
          {/* Isibo Subpages */}
          <Route
            path="/dashboard/isibo/add-household"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <AddHousehold />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/isibo/households"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <HouseholdsList />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/isibo/reports"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <Reports />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/isibo/notifications"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <Notifications />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* Cell Dashboard */}
          <Route
            path="/dashboard/cell"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="cell" />
                <div className="dashboard-main">
                  <CellDashboard />
                  <Footer />
                </div>
              </div>
            }
          />
          {/* Cell Subpages */}
          <Route
            path="/dashboard/cell/isibos"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="cell" />
                <div className="dashboard-main">
                  <ManageIsibos />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/cell/approvals"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="cell" />
                <div className="dashboard-main">
                  <ApproveIsiboData />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/cell/reports"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="cell" />
                <div className="dashboard-main">
                  <CellReports />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/cell/notifications"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="cell" />
                <div className="dashboard-main">
                  <CellNotifications />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* Sector Dashboard */}
          <Route
            path="/dashboard/sector"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="sector" />
                <div className="dashboard-main">
                  <SectorDashboard />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* District Dashboard */}
          <Route
            path="/dashboard/district"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="district" />
                <div className="dashboard-main">
                  <DistrictDashboard />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* UNIVERSAL PAGES */}
          <Route
            path="/settings"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <Settings />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/calendar"
            element={
              <div className="page-with-sidebar">
                <Sidebar level="isibo" />
                <div className="dashboard-main">
                  <CalendarPage />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
