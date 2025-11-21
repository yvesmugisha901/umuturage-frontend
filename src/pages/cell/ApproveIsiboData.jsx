import React from "react";
import "../../styles/DashboardContent.css";

const ApproveIsiboData = () => {
  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Approve Isibo Data</h1>
            <p>Review and approve updates submitted by isibo leaders.</p>
          </div>

          <div className="section">
            <h2>Pending Approvals</h2>

            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Isibo</th>
                  <th>Change Type</th>
                  <th>Submitted By</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Isibo A1</td>
                  <td>New Household</td>
                  <td>Leader Bosco</td>
                  <td>2025-11-20</td>
                  <td><button className="btn-submit">Approve</button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ApproveIsiboData;
