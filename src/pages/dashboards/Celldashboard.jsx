import React, { useState } from "react";
import Sidebar from "../../components/sidebars/Sidebar";
import "../../styles/cellDashboard.css";

const CellDashboard = () => {
  // Villages under this Cell
  const [villages] = useState([
    { id: 1, name: "Village Gasharu", leader: "Uwimana Alice", households: 120, approvedReports: 340 },
    { id: 2, name: "Village Kinyana", leader: "Nkurunziza Paul", households: 98, approvedReports: 276 },
  ]);

  // Pending info submitted by villages
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, village: "Village Gasharu", submittedBy: "Uwimana Alice", household: "HH-0231", date: "2025-11-10" },
    { id: 2, village: "Village Kinyana", submittedBy: "Nkurunziza Paul", household: "HH-0314", date: "2025-11-09" },
  ]);

  const approvePending = (id) => {
    setPendingApprovals(pendingApprovals.filter(p => p.id !== id));
    alert("Approved and forwarded to Sector!");
  };

  const rejectPending = (id) => {
    setPendingApprovals(pendingApprovals.filter(p => p.id !== id));
    alert("Submission rejected.");
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar level="cell" />

      <main className="dashboard-content">

        {/* Header */}
        <header className="dashboard-header">
          <h1>Cell Dashboard</h1>
          <p>Overview of villages, approvals, and reports</p>
        </header>

        {/* Stats Cards */}
        <section className="cards-container">
          <div className="card blue">
            <h3>Total Villages</h3>
            <p>{villages.length}</p>
          </div>
          <div className="card green">
            <h3>Total Households</h3>
            <p>{villages.reduce((sum, v) => sum + v.households, 0)}</p>
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
          <h2>Pending Information From Villages</h2>

          {pendingApprovals.length === 0 ? (
            <p className="empty">No pending submissions</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Village</th>
                  <th>Submitted By</th>
                  <th>Household</th>
                  <th>Date Submitted</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {pendingApprovals.map(p => (
                  <tr key={p.id}>
                    <td>{p.village}</td>
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

        {/* Managed Villages */}
        <section className="section">
          <h2>Villages Under This Cell</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>Village Name</th>
                <th>Leader</th>
                <th>Total Households</th>
                <th>Approved Reports</th>
              </tr>
            </thead>

            <tbody>
              {villages.map(v => (
                <tr key={v.id}>
                  <td>{v.name}</td>
                  <td>{v.leader}</td>
                  <td>{v.households}</td>
                  <td>{v.approvedReports}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Reports Section */}
        <section className="section">
          <h2>Reports & Analytics</h2>
          <div className="report-box">
            <p>📊 Coming Soon: Weekly statistics, village population trends, and sector reports.</p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CellDashboard;
