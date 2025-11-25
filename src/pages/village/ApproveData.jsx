// src/pages/village/ApproveData.jsx
import React from "react";
import "../../styles/villagePages.css";

const ApproveVillageData = () => {
  return (
    <div className="village-page-container">
      <h1 className="village-title">Approve Isibo Data</h1>

      <table className="village-data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Isibo</th>
            <th>Change Type</th>
            <th>Submitted By</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Isibo A1</td>
            <td>New Household</td>
            <td>Leader Bosco</td>
            <td>2025-11-20</td>
            <td>
              <button className="village-btn village-btn-approve">Approve</button>
              <button className="village-btn village-btn-delete">Reject</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Isibo B2</td>
            <td>Update Member</td>
            <td>Leader Jean</td>
            <td>2025-11-21</td>
            <td>
              <button className="village-btn village-btn-approve">Approve</button>
              <button className="village-btn village-btn-delete">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApproveVillageData;
