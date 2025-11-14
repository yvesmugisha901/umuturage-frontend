import React, { useState } from "react";
import Sidebar from "../../components/sidebars/Sidebar";
import "../../styles/sectorDashboard.css";

const SectorDashboard = () => {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, names: "Mukamana Alice", cell: "Gisozi Cell", requestType: "New Resident", submitted: "2025-11-10" },
    { id: 2, names: "Nshimiyimana Eric", cell: "Gacuriro Cell", requestType: "Moved Out", submitted: "2025-11-09" },
  ]);

  const [cells] = useState([
    { id: 1, name: "Gisozi Cell", households: 380, residents: 1520 },
    { id: 2, name: "Gacuriro Cell", households: 295, residents: 1104 },
    { id: 3, name: "Kagugu Cell", households: 410, residents: 1740 },
  ]);

  const approveRequest = (id) => {
    setPendingRequests(pendingRequests.filter(req => req.id !== id));
    alert("Request forwarded to District!");
  };

  const rejectRequest = (id) => {
    setPendingRequests(pendingRequests.filter(req => req.id !== id));
    alert("Request rejected.");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <Sidebar level="sector" />

      {/* Main content */}
      <main className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Sector Dashboard</h1>
          <p>Manage residents, approve information from Cells, and forward updates to the District.</p>
        </header>

        {/* KPI Cards */}
        <section className="cards-container">
          <div className="card blue">
            <h3>Total Cells</h3>
            <p>{cells.length}</p>
          </div>
          <div className="card green">
            <h3>Total Households</h3>
            <p>{cells.reduce((sum, c) => sum + c.households, 0)}</p>
          </div>
          <div className="card orange">
            <h3>Total Residents</h3>
            <p>{cells.reduce((sum, c) => sum + c.residents, 0)}</p>
          </div>
        </section>

        {/* Pending Approvals */}
        <section className="section">
          <h2>Pending Approvals from Cells</h2>
          {pendingRequests.length === 0 ? (
            <p className="empty">No pending requests.</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Names</th>
                  <th>Cell</th>
                  <th>Type</th>
                  <th>Submitted</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map(req => (
                  <tr key={req.id}>
                    <td>{req.names}</td>
                    <td>{req.cell}</td>
                    <td>{req.requestType}</td>
                    <td>{req.submitted}</td>
                    <td>
                      <button className="btn-approve" onClick={() => approveRequest(req.id)}>✅ Approve</button>
                      <button className="btn-reject" onClick={() => rejectRequest(req.id)}>❌ Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        {/* Cells Summary */}
        <section className="section">
          <h2>Cells in This Sector</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cell Name</th>
                <th>Households</th>
                <th>Residents</th>
              </tr>
            </thead>
            <tbody>
              {cells.map(cell => (
                <tr key={cell.id}>
                  <td>{cell.name}</td>
                  <td>{cell.households}</td>
                  <td>{cell.residents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default SectorDashboard;
