// src/pages/admin/AdminApprovals.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";

const AdminApprovals = () => {
  // Dummy pending data
  const [approvals, setApprovals] = useState([
    { id: 1, type: "Household Update", source: "Village Gisozi", description: "New members added", status: "Pending" },
    { id: 2, type: "Isibo Update", source: "Cell 12", description: "Household deleted", status: "Pending" },
    { id: 3, type: "Sector Submission", source: "Sector 3", description: "Weekly report submitted", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setApprovals(prev =>
      prev.map(item => (item.id === id ? { ...item, status: "Approved" } : item))
    );
  };

  const handleReject = (id) => {
    setApprovals(prev =>
      prev.map(item => (item.id === id ? { ...item, status: "Rejected" } : item))
    );
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Pending Approvals</h1>
      <p className="admin-subtitle">Review and verify updates submitted by villages, cells, and sectors</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Source</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.source}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>
                  {item.status === "Pending" && (
                    <>
                      <button className="admin-btn admin-btn-success admin-btn-sm" onClick={() => handleApprove(item.id)}>Approve</button>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleReject(item.id)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApprovals;
