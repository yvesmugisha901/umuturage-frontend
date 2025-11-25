// src/pages/dashboards/isibo/AddHousehold.jsx
import React from "react";
import "../../styles/isiboPages.css";

const AddHousehold = () => {
  return (
    <div className="isibo-page-container">
      <h1 className="isibo-title">Add Household</h1>

      <div className="isibo-card">
        <p>Use the form below to add a new household under this Isibo.</p>

        <form className="form">
          <label className="field">
            <span>Household Name</span>
            <input type="text" placeholder="Enter household name" />
          </label>

          <label className="field">
            <span>Head of Household</span>
            <input type="text" placeholder="Enter head of household" />
          </label>

          <label className="field">
            <span>Number of Members</span>
            <input type="number" placeholder="Enter number of members" />
          </label>

          <button type="submit" className="btn-submit">Add Household</button>
        </form>
      </div>
    </div>
  );
};

export default AddHousehold;
