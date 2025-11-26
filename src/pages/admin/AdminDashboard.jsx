// src/pages/admin/AdminDashboard.jsx
import React from "react";
import "../../styles/adminPages.css";
import { FaUsers, FaHome, FaChartBar, FaBell } from "react-icons/fa";

const AdminDashboard = () => {
  // Junk Data (replace later with backend)
  const stats = {
    totalHouseholds: 480,
    totalMembers: 2190,
    totalIsibos: 88,
    pendingNotifications: 14,
  };

  const activities = [
    "New household added in Gisozi Village",
    "Cell updated member list for Isibo 15",
    "Sector submitted weekly report",
    "District approved new changes from Gasabo",
  ];

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <p className="admin-subtitle">System-wide overview and metrics</p>

      {/* Overview Cards */}
      <div className="admin-cards">
        <div className="admin-card">
          <div className="admin-card-icon">
            <FaHome />
          </div>
          <span className="admin-card-title">Total Households</span>
          <span className="admin-card-value">{stats.totalHouseholds}</span>
        </div>

        <div className="admin-card">
          <div className="admin-card-icon">
            <FaUsers />
          </div>
          <span className="admin-card-title">Total Members</span>
          <span className="admin-card-value">{stats.totalMembers}</span>
        </div>

        <div className="admin-card">
          <div className="admin-card-icon">
            <FaChartBar />
          </div>
          <span className="admin-card-title">Total Isibos</span>
          <span className="admin-card-value">{stats.totalIsibos}</span>
        </div>

        <div className="admin-card">
          <div className="admin-card-icon">
            <FaBell />
          </div>
          <span className="admin-card-title">Pending Notifications</span>
          <span className="admin-card-value">{stats.pendingNotifications}</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="admin-chart-container">
        <h2 className="admin-subtitle">Analytics Overview</h2>
        <div className="admin-chart-placeholder">
          Chart Placeholder (Integrate Chart.js or Recharts later)
        </div>
      </div>

      {/* Grid for secondary charts */}
      <div className="admin-grid-2 mt-30">
        <div className="admin-chart-container">
          <h2 className="admin-subtitle">Households by Sector</h2>
          <div className="admin-chart-placeholder">
            Placeholder
          </div>
        </div>

        <div className="admin-chart-container">
          <h2 className="admin-subtitle">Members Growth Rate</h2>
          <div className="admin-chart-placeholder">
            Placeholder
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="admin-chart-container mt-40">
        <h2 className="admin-subtitle">Recent System Activity</h2>
        <ul className="recent-activity">
          {activities.map((item, index) => (
            <li key={index} className="admin-notification">
              <span className="admin-notification-title">{item}</span>
              <span className="admin-notification-time">Just now</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
