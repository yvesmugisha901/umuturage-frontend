import React from "react";
import "../../styles/DashboardContent.css";

const CellReports = () => {
  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Cell Reports</h1>
            <p>Overview and analytics for all isibos in the cell.</p>
          </div>

          <div className="cards-container">
            <div className="card">
              <h3>Total Isibos</h3>
              <p>12</p>
            </div>

            <div className="card">
              <h3>Total Households</h3>
              <p>543</p>
            </div>

            <div className="card">
              <h3>Pending Updates</h3>
              <p>9</p>
            </div>
          </div>

          <div className="section">
            <h2>Recent Activity</h2>
            <p>More detailed reporting will be added later.</p>
          </div>

        </main>
      </div>
    </div>
  );
};

export default CellReports;
