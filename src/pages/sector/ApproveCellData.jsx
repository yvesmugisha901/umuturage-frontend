import React from "react";
import "../../styles/sectorPages.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const ApproveCellData = () => {
  return (
    <div className="sector-page-container">
      <h1 className="sector-title">Approve Cell Data</h1>

      {/* Action Instructions */}
      <div className="sector-actions">
        <p>Select submitted cell data below to approve or reject.</p>
      </div>

      {/* Data Approval Cards */}
      <div className="sector-card">
        <h3>Submitted Cell Data #1</h3>
        <p>Details: Population update, service metrics, and other submitted info.</p>
        <div className="action-buttons">
          <button className="approve-btn"><FaCheck /> Approve</button>
          <button className="reject-btn"><FaTimes /> Reject</button>
        </div>
      </div>

      <div className="sector-card">
        <h3>Submitted Cell Data #2</h3>
        <p>Details: Household count, project progress, or other submitted metrics.</p>
        <div className="action-buttons">
          <button className="approve-btn"><FaCheck /> Approve</button>
          <button className="reject-btn"><FaTimes /> Reject</button>
        </div>
      </div>

      <div className="sector-card">
        <h3>Other Submissions</h3>
        <p>Additional cell data awaiting review can be displayed here.</p>
      </div>
    </div>
  );
};

export default ApproveCellData;
