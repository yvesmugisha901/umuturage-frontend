import React from "react";
import "../../styles/cellPages.css"; // Common CSS for all cell pages

const ApproveIsiboData = () => {
  const pendingData = [
    { id: 1, isibo: "Isibo A1", changeType: "New Household", submittedBy: "Leader Bosco", date: "2025-11-20", status: "Pending" },
    { id: 2, isibo: "Isibo B2", changeType: "Update Info", submittedBy: "Leader Alice", date: "2025-11-21", status: "Pending" },
    { id: 3, isibo: "Isibo C3", changeType: "Remove Household", submittedBy: "Leader John", date: "2025-11-22", status: "Pending" },
  ];

  const handleApprove = (id) => alert(`Approved item with id: ${id}`);
  const handleReject = (id) => alert(`Rejected item with id: ${id}`);

  return (
    <div className="cell-page-container">
      <header className="cell-page-header">
        <h1>Approve Isibo Data</h1>
        <p>Review and approve updates submitted by isibo leaders for your cell.</p>
      </header>

      <section className="approval-section">
        <h2 className="section-title">Pending Approvals</h2>
        <div className="table-wrapper">
          <table className="approval-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Isibo</th>
                <th>Change Type</th>
                <th>Submitted By</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.isibo}</td>
                  <td>{item.changeType}</td>
                  <td>{item.submittedBy}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                  </td>
                  <td className="actions-cell">
                    <button className="btn-approve" onClick={() => handleApprove(item.id)}>Approve</button>
                    <button className="btn-reject" onClick={() => handleReject(item.id)}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ApproveIsiboData;
