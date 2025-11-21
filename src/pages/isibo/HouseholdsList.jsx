// src/pages/dashboards/isibo/HouseholdsList.jsx
import React from "react";
import "../../styles/isiboDashboard.css";

const HouseholdsList = () => {
  return (
    <div className="section">
      <h2>Households List</h2>
      <p>All households registered under this Isibo.</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Household Name</th>
            <th>Head</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Household A</td>
            <td>John Doe</td>
            <td>5</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Household B</td>
            <td>Jane Doe</td>
            <td>4</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdsList;
