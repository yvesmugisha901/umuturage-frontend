import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import "../../styles/sidebar.css";

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>ADMIN</h2>
      </div>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard/admin">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/dashboard/admin/manage-users">
            <FaUsers className="icon" /> Manage Users
          </Link>
        </li>

        <li>
          <Link to="/dashboard/admin/manage-district">
            <FaUsers className="icon" /> Manage District
          </Link>
        </li>

        <li>
          <Link to="/dashboard/admin/settings">
            <FaCog className="icon" /> System Settings
          </Link>
        </li>

        <li>
          <Link to="/dashboard/admin/calendar">
            <FaCalendarAlt className="icon" /> Calendar
          </Link>
        </li>

        <li className="logout">
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>

      </ul>
    </aside>
  );
};

export default AdminSidebar;
