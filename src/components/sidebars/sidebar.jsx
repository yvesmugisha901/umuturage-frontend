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
  FaChartBar
} from "react-icons/fa";

const Sidebar = ({ level }) => {
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
          </>
        )}

        {/* ------------------------------- */}
        {/*         COMMON FEATURES         */}
        {/* ------------------------------- */}
        <div className="sidebar-section-title">General</div>

        <li>
          <Link to="/reports">
            <FaClipboardList className="icon" /> Reports
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            <FaBell className="icon" /> Notifications
          </Link>
        </li>

        <li>
          <Link to="/calendar">
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

export default Sidebar;
