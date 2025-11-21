// src/pages/dashboards/isibo/AddHousehold.jsx
import React from "react";
import "../../styles/isiboDashboard.css";

const AddHousehold = () => {
  return (
    <div className="section">
      <h2>Add Household</h2>
      <p>This is the Add Household page for Isibo.</p>

      {/* Example form */}
      <form className="form">
        <input type="text" placeholder="Household Name" />
        <input type="text" placeholder="Head of Household" />
        <input type="text" placeholder="Number of Members" />
        <button type="submit" className="btn-submit">Add Household</button>
      </form>
    </div>
  );
};

export default AddHousehold;
