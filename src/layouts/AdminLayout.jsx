// src/layouts/AdminLayout.jsx
import React from "react";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import "../styles/adminPages.css"; // optional, for layout styling

const AdminLayout = ({ children }) => {
  return (
    <div className="page-with-sidebar">
      <AdminSidebar />
      <div className="dashboard-main">
        {children} {/* This is where each page content will appear */}
      </div>
    </div>
  );
};

export default AdminLayout;
