import React, { useState } from "react";
import "../../styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaBell,
  FaCalendarAlt,
  FaSignOutAlt,
  FaCheckCircle,
  FaChartBar,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = ({ level }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const settingsPath = `/dashboard/${level}/settings`;
  const calendarPath = `/dashboard/${level}/calendar`;

  const isActive = (path) => location.pathname === path;

  const levelLabels = {
    isibo:    { label: "Isibo",      sub: "Village Unit" },
    village:  { label: "Umudugudu", sub: "Village"      },
    cell:     { label: "Akagari",   sub: "Cell"         },
    sector:   { label: "Umurenge",  sub: "Sector"       },
    district: { label: "Akarere",   sub: "District"     },
  };

  const currentLabel = levelLabels[level] || { label: level, sub: "" };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Collapse Toggle */}
      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <FaHome />
          </div>
          {!collapsed && (
            <div className="sidebar-logo-text">
              <span className="sidebar-logo-main">{currentLabel.label}</span>
              <span className="sidebar-logo-sub">{currentLabel.sub}</span>
            </div>
          )}
        </div>
      </div>

      <div className="sidebar-divider" />

      {!collapsed && <p className="sidebar-section-title">Main Menu</p>}

      <ul className="sidebar-menu">

        {/* ISIBO */}
        {level === "isibo" && (
          <>
            <li>
              <Link
                to="/dashboard/isibo/add-household"
                className={`sidebar-link ${isActive("/dashboard/isibo/add-household") ? "active" : ""}`}
                title={collapsed ? "Add Household" : ""}
              >
                <span className="sidebar-icon"><FaUsers /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Add Household</span>
                    <span className="sidebar-link-kiny">Ongeraho Urugo</span>
                  </div>
                )}
                {isActive("/dashboard/isibo/add-household") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/isibo/households"
                className={`sidebar-link ${isActive("/dashboard/isibo/households") ? "active" : ""}`}
                title={collapsed ? "Households List" : ""}
              >
                <span className="sidebar-icon"><FaHome /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Households List</span>
                    <span className="sidebar-link-kiny">Urutonde rw'Ingo</span>
                  </div>
                )}
                {isActive("/dashboard/isibo/households") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/isibo/reports"
                className={`sidebar-link ${isActive("/dashboard/isibo/reports") ? "active" : ""}`}
                title={collapsed ? "Reports" : ""}
              >
                <span className="sidebar-icon"><FaClipboardList /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Reports</span>
                    <span className="sidebar-link-kiny">Raporo</span>
                  </div>
                )}
                {isActive("/dashboard/isibo/reports") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/isibo/notifications"
                className={`sidebar-link ${isActive("/dashboard/isibo/notifications") ? "active" : ""}`}
                title={collapsed ? "Notifications" : ""}
              >
                <span className="sidebar-icon"><FaBell /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Notifications</span>
                    <span className="sidebar-link-kiny">Imenyesha</span>
                  </div>
                )}
                {isActive("/dashboard/isibo/notifications") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
          </>
        )}

        {/* VILLAGE */}
        {level === "village" && (
          <>
            <li>
              <Link
                to="/dashboard/village"
                className={`sidebar-link ${isActive("/dashboard/village") ? "active" : ""}`}
                title={collapsed ? "Dashboard" : ""}
              >
                <span className="sidebar-icon"><FaHome /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Dashboard</span>
                    <span className="sidebar-link-kiny">Ikibaho</span>
                  </div>
                )}
                {isActive("/dashboard/village") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/village/approvedata"
                className={`sidebar-link ${isActive("/dashboard/village/approvedata") ? "active" : ""}`}
                title={collapsed ? "Approve Data" : ""}
              >
                <span className="sidebar-icon"><FaCheckCircle /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Approve Data</span>
                    <span className="sidebar-link-kiny">Emeza Amakuru</span>
                  </div>
                )}
                {isActive("/dashboard/village/approvedata") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/village/reports"
                className={`sidebar-link ${isActive("/dashboard/village/reports") ? "active" : ""}`}
                title={collapsed ? "Reports" : ""}
              >
                <span className="sidebar-icon"><FaClipboardList /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Reports</span>
                    <span className="sidebar-link-kiny">Raporo</span>
                  </div>
                )}
                {isActive("/dashboard/village/reports") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/village/notifications"
                className={`sidebar-link ${isActive("/dashboard/village/notifications") ? "active" : ""}`}
                title={collapsed ? "Notifications" : ""}
              >
                <span className="sidebar-icon"><FaBell /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Notifications</span>
                    <span className="sidebar-link-kiny">Imenyesha</span>
                  </div>
                )}
                {isActive("/dashboard/village/notifications") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
          </>
        )}

        {/* CELL */}
        {level === "cell" && (
          <>
            <li>
              <Link
                to="/dashboard/cell"
                className={`sidebar-link ${isActive("/dashboard/cell") ? "active" : ""}`}
                title={collapsed ? "Dashboard" : ""}
              >
                <span className="sidebar-icon"><FaHome /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Dashboard</span>
                    <span className="sidebar-link-kiny">Ikibaho</span>
                  </div>
                )}
                {isActive("/dashboard/cell") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cell/approvals"
                className={`sidebar-link ${isActive("/dashboard/cell/approvals") ? "active" : ""}`}
                title={collapsed ? "Approve Village Data" : ""}
              >
                <span className="sidebar-icon"><FaCheckCircle /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Approve Village Data</span>
                    <span className="sidebar-link-kiny">Emeza Amakuru</span>
                  </div>
                )}
                {isActive("/dashboard/cell/approvals") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cell/managevillages"
                className={`sidebar-link ${isActive("/dashboard/cell/managevillages") ? "active" : ""}`}
                title={collapsed ? "Manage Villages" : ""}
              >
                <span className="sidebar-icon"><FaUsers /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Manage Villages</span>
                    <span className="sidebar-link-kiny">Gucunga Imidugudu</span>
                  </div>
                )}
                {isActive("/dashboard/cell/managevillages") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cell/reports"
                className={`sidebar-link ${isActive("/dashboard/cell/reports") ? "active" : ""}`}
                title={collapsed ? "Cell Reports" : ""}
              >
                <span className="sidebar-icon"><FaClipboardList /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Cell Reports</span>
                    <span className="sidebar-link-kiny">Raporo</span>
                  </div>
                )}
                {isActive("/dashboard/cell/reports") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cell/notifications"
                className={`sidebar-link ${isActive("/dashboard/cell/notifications") ? "active" : ""}`}
                title={collapsed ? "Notifications" : ""}
              >
                <span className="sidebar-icon"><FaBell /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Notifications</span>
                    <span className="sidebar-link-kiny">Imenyesha</span>
                  </div>
                )}
                {isActive("/dashboard/cell/notifications") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
          </>
        )}

        {/* SECTOR */}
        {level === "sector" && (
          <>
            <li>
              <Link
                to="/dashboard/sector"
                className={`sidebar-link ${isActive("/dashboard/sector") ? "active" : ""}`}
                title={collapsed ? "Dashboard" : ""}
              >
                <span className="sidebar-icon"><FaHome /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Dashboard</span>
                    <span className="sidebar-link-kiny">Ikibaho</span>
                  </div>
                )}
                {isActive("/dashboard/sector") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sector/cells"
                className={`sidebar-link ${isActive("/dashboard/sector/cells") ? "active" : ""}`}
                title={collapsed ? "Manage Cells" : ""}
              >
                <span className="sidebar-icon"><FaUsers /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Manage Cells</span>
                    <span className="sidebar-link-kiny">Gucunga Akagari</span>
                  </div>
                )}
                {isActive("/dashboard/sector/cells") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sector/approvals"
                className={`sidebar-link ${isActive("/dashboard/sector/approvals") ? "active" : ""}`}
                title={collapsed ? "Approve Cell Data" : ""}
              >
                <span className="sidebar-icon"><FaCheckCircle /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Approve Cell Data</span>
                    <span className="sidebar-link-kiny">Emeza Amakuru</span>
                  </div>
                )}
                {isActive("/dashboard/sector/approvals") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sector/reports"
                className={`sidebar-link ${isActive("/dashboard/sector/reports") ? "active" : ""}`}
                title={collapsed ? "Reports" : ""}
              >
                <span className="sidebar-icon"><FaClipboardList /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Reports</span>
                    <span className="sidebar-link-kiny">Raporo</span>
                  </div>
                )}
                {isActive("/dashboard/sector/reports") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/sector/notifications"
                className={`sidebar-link ${isActive("/dashboard/sector/notifications") ? "active" : ""}`}
                title={collapsed ? "Notifications" : ""}
              >
                <span className="sidebar-icon"><FaBell /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Notifications</span>
                    <span className="sidebar-link-kiny">Imenyesha</span>
                  </div>
                )}
                {isActive("/dashboard/sector/notifications") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
          </>
        )}

        {/* DISTRICT */}
        {level === "district" && (
          <>
            <li>
              <Link
                to="/dashboard/district"
                className={`sidebar-link ${isActive("/dashboard/district") ? "active" : ""}`}
                title={collapsed ? "Dashboard" : ""}
              >
                <span className="sidebar-icon"><FaHome /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Dashboard</span>
                    <span className="sidebar-link-kiny">Ikibaho</span>
                  </div>
                )}
                {isActive("/dashboard/district") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/district/sectors"
                className={`sidebar-link ${isActive("/dashboard/district/sectors") ? "active" : ""}`}
                title={collapsed ? "Manage Sectors" : ""}
              >
                <span className="sidebar-icon"><FaUsers /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Manage Sectors</span>
                    <span className="sidebar-link-kiny">Gucunga Imirenge</span>
                  </div>
                )}
                {isActive("/dashboard/district/sectors") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/district/statistics"
                className={`sidebar-link ${isActive("/dashboard/district/statistics") ? "active" : ""}`}
                title={collapsed ? "Statistics" : ""}
              >
                <span className="sidebar-icon"><FaChartBar /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Statistics</span>
                    <span className="sidebar-link-kiny">Imibare</span>
                  </div>
                )}
                {isActive("/dashboard/district/statistics") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/district/reports"
                className={`sidebar-link ${isActive("/dashboard/district/reports") ? "active" : ""}`}
                title={collapsed ? "Reports" : ""}
              >
                <span className="sidebar-icon"><FaClipboardList /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Reports</span>
                    <span className="sidebar-link-kiny">Raporo</span>
                  </div>
                )}
                {isActive("/dashboard/district/reports") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/district/notifications"
                className={`sidebar-link ${isActive("/dashboard/district/notifications") ? "active" : ""}`}
                title={collapsed ? "Notifications" : ""}
              >
                <span className="sidebar-icon"><FaBell /></span>
                {!collapsed && (
                  <div className="sidebar-link-text">
                    <span className="sidebar-link-label">Notifications</span>
                    <span className="sidebar-link-kiny">Imenyesha</span>
                  </div>
                )}
                {isActive("/dashboard/district/notifications") && !collapsed && <span className="active-dot" />}
              </Link>
            </li>
          </>
        )}

      </ul>

      <div className="sidebar-divider" />

      {!collapsed && <p className="sidebar-section-title">General</p>}

      <ul className="sidebar-menu">
        <li>
          <Link
            to={settingsPath}
            className={`sidebar-link ${isActive(settingsPath) ? "active" : ""}`}
            title={collapsed ? "Settings" : ""}
          >
            <span className="sidebar-icon"><FaCog /></span>
            {!collapsed && (
              <div className="sidebar-link-text">
                <span className="sidebar-link-label">Settings</span>
                <span className="sidebar-link-kiny">Igenamiterere</span>
              </div>
            )}
            {isActive(settingsPath) && !collapsed && <span className="active-dot" />}
          </Link>
        </li>
        <li>
          <Link
            to={calendarPath}
            className={`sidebar-link ${isActive(calendarPath) ? "active" : ""}`}
            title={collapsed ? "Calendar" : ""}
          >
            <span className="sidebar-icon"><FaCalendarAlt /></span>
            {!collapsed && (
              <div className="sidebar-link-text">
                <span className="sidebar-link-label">Calendar</span>
                <span className="sidebar-link-kiny">Kalendari</span>
              </div>
            )}
            {isActive(calendarPath) && !collapsed && <span className="active-dot" />}
          </Link>
        </li>
      </ul>

      {/* Spacer */}
      <div className="sidebar-spacer" />

      {/* Logout */}
      <div className="sidebar-footer">
        <div className="sidebar-divider" />
        <ul className="sidebar-menu">
          <li>
            <Link
              to="/logout"
              className="sidebar-link sidebar-logout"
              title={collapsed ? "Logout" : ""}
            >
              <span className="sidebar-icon"><FaSignOutAlt /></span>
              {!collapsed && (
                <div className="sidebar-link-text">
                  <span className="sidebar-link-label">Logout</span>
                  <span className="sidebar-link-kiny">Sohoka</span>
                </div>
              )}
            </Link>
          </li>
        </ul>
      </div>

    </aside>
  );
};

export default Sidebar;
