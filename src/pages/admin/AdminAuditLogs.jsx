// src/pages/admin/AdminAuditLogs.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";

const AdminAuditLogs = () => {
  // Dummy audit logs
  const [logs] = useState([
    { id: 1, action: "User John created a new household", timestamp: "2025-11-28 09:20" },
    { id: 2, action: "Admin Mary updated Sector 3 data", timestamp: "2025-11-28 08:45" },
    { id: 3, action: "District Gasabo approved new Isibo changes", timestamp: "2025-11-27 17:30" },
    { id: 4, action: "User Jane deleted a member from Household 12", timestamp: "2025-11-27 16:50" },
  ]);

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">System Audit Logs</h1>
      <p className="admin-subtitle">Track all system activities and admin actions</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.action}</td>
                <td>{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAuditLogs;
