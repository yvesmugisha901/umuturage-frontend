import React from "react";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaBell,
  FaCalendarAlt,
  FaSignOutAlt,
  FaCheckCircle,
  FaChartBar,
  FaCog
} from "react-icons/fa";

const Sidebar = ({ level }) => {
  // Map universal pages to role-specific paths
  const settingsPath = `/dashboard/${level}/settings`;
  const calendarPath = `/dashboard/${level}/calendar`;

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2>{level.toUpperCase()} Dashboard</h2>
      </div>

      <ul className="sidebar-menu">

        {/* ------------------------------- */}
        {/*            ISIBO MENU           */}
        {/* ------------------------------- */}
        {level === "isibo" && (
          <>
            <li>
              <Link to="/dashboard/isibo/add-household">
                <FaUsers className="icon" /> Add Household
              </Link>
            </li>
            <li>
              <Link to="/dashboard/isibo/households">
                <FaHome className="icon" /> Households List
              </Link>
            </li>
            <li>
              <Link to="/dashboard/isibo/reports">
                <FaClipboardList className="icon" /> Reports
              </Link>
            </li>
            <li>
              <Link to="/dashboard/isibo/notifications">
                <FaBell className="icon" /> Notifications
              </Link>
            </li>
          </>
        )}

        {/* ------------------------------- */}
        {/*            CELL MENU            */}
        {/* ------------------------------- */}
        {level === "cell" && (
          <>
            <li>
              <Link to="/dashboard/cell/isibos">
                <FaUsers className="icon" /> Manage Isibos
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cell/approvals">
                <FaCheckCircle className="icon" /> Approve Isibo Data
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cell/reports">
                <FaClipboardList className="icon" /> Reports
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cell/notifications">
                <FaBell className="icon" /> Notifications
              </Link>
            </li>
          </>
        )}

        {/* ------------------------------- */}
        {/*           SECTOR MENU           */}
        {/* ------------------------------- */}
        {level === "sector" && (
          <>
            <li>
              <Link to="/dashboard/sector/cells">
                <FaUsers className="icon" /> Manage Cells
              </Link>
            </li>
            <li>
              <Link to="/dashboard/sector/approvals">
                <FaClipboardList className="icon" /> Approve Cell Data
              </Link>
            </li>
            <li>
              <Link to="/dashboard/sector/reports">
                <FaClipboardList className="icon" /> Reports
              </Link>
            </li>
            <li>
              <Link to="/dashboard/sector/notifications">
                <FaBell className="icon" /> Notifications
              </Link>
            </li>
          </>
        )}

        {/* ------------------------------- */}
        {/*          DISTRICT MENU          */}
        {/* ------------------------------- */}
        {level === "district" && (
          <>
            <li>
              <Link to="/dashboard/district/sectors">
                <FaUsers className="icon" /> Manage Sectors
              </Link>
            </li>
            <li>
              <Link to="/dashboard/district/statistics">
                <FaChartBar className="icon" /> District Statistics
              </Link>
            </li>
            <li>
              <Link to="/dashboard/district/reports">
                <FaClipboardList className="icon" /> Reports
              </Link>
            </li>
            <li>
              <Link to="/dashboard/district/notifications">
                <FaBell className="icon" /> Notifications
              </Link>
            </li>
          </>
        )}

        {/* ------------------------------- */}
        {/*     ROLE-SPECIFIC SETTINGS      */}
        {/* ------------------------------- */}
        <li>
          <Link to={settingsPath}>
            <FaCog className="icon" /> Settings
          </Link>
        </li>

        <li>
          <Link to={calendarPath}>
            <FaCalendarAlt className="icon" /> Calendar
          </Link>
        </li>

        {/* ------------------------------- */}
        {/*           LOGOUT                */}
        {/* ------------------------------- */}
        <li className="logout">
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>

      </ul>
    </aside>
  );
};

export default Sidebar;
