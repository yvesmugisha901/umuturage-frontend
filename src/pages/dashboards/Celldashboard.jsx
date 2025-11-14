import React, { useState } from "react";
import Sidebar from "../../components/sidebars/Sidebar";
import "../../styles/cellDashboard.css";

const CellDashboard = () => {
  const [isibos] = useState([
    { id: 1, name: "Isibo A12", leader: "Mukamana Claire", households: 48, approvedReports: 132 },
    { id: 2, name: "Isibo B04", leader: "Twizerimana Eric", households: 36, approvedReports: 97 },
  ]);

  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, isibo: "Isibo A12", submittedBy: "Mukamana Claire", household: "HH-0093", date: "2025-11-10" },
    { id: 2, isibo: "Isibo B04", submittedBy: "Twizerimana Eric", household: "HH-0198", date: "2025-11-09" },
  ]);

  const approvePending = (id) => {
    setPendingApprovals(pendingApprovals.filter(p => p.id !== id));
    alert("Approved and forwarded to Sector!");
  };

  const rejectPending = (id) => {
    setPendingApprovals(pendingApprovals.filter(p => p.id !== id));
    alert("Rejected submission.");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <Sidebar level="cell" />

      {/* Main content */}
      <main className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Cell Dashboard</h1>
          <p>Overview of Isibos, approvals, and reports</p>
        </header>

        {/* Stats Cards */}
        <section className="cards-container">
          <div className="card blue">
            <h3>Total Isibos</h3>
            <p>{isibos.length}</p>
          </div>
          <div className="card green">
            <h3>Total Households</h3>
            <p>{isibos.reduce((sum, i) => sum + i.households, 0)}</p>
          </div>
          <div className="card orange">
            <h3>Pending Approvals</h3>
            <p>{pendingApprovals.length}</p>
          </div>
          <div className="card purple">
            <h3>Approved This Week</h3>
            <p>27</p>
          </div>
        </section>

        {/* Pending Approvals */}
        <section className="section">
          <h2>Pending Information From Isibos</h2>
          {pendingApprovals.length === 0 ? (
            <p className="empty">No pending submissions</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Isibo</th>
                  <th>Submitted By</th>
                  <th>Household</th>
                  <th>Date Submitted</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map(p => (
                  <tr key={p.id}>
                    <td>{p.isibo}</td>
                    <td>{p.submittedBy}</td>
                    <td>{p.household}</td>
                    <td>{p.date}</td>
                    <td>
                      <button className="btn-approve" onClick={() => approvePending(p.id)}>✅ Approve</button>
                      <button className="btn-reject" onClick={() => rejectPending(p.id)}>❌ Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        {/* Managed Isibos */}
        <section className="section">
          <h2>Isibos Under This Cell</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Isibo Name</th>
                <th>Leader</th>
                <th>Total Households</th>
                <th>Approved Reports</th>
              </tr>
            </thead>
            <tbody>
              {isibos.map(i => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{i.leader}</td>
                  <td>{i.households}</td>
                  <td>{i.approvedReports}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Reports Section */}
        <section className="section">
          <h2>Reports & Analytics</h2>
          <div className="report-box">
            <p>📊 Coming Soon: Weekly statistics, population trends, and reports sent to Sector.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CellDashboard;
