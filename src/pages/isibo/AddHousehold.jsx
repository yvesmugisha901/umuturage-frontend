// src/pages/dashboards/isibo/AddHousehold.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/isiboPages.css";

const API_BASE = "http://localhost:5000/api/isibo"; // Backend URL

const AddHousehold = () => {
  const [households, setHouseholds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch households on component mount
  useEffect(() => {
    const fetchHouseholds = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE}/households`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ Correctly set households
        setHouseholds(res.data.households || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load households.");
      } finally {
        setLoading(false);
      }
    };

    fetchHouseholds();
  }, []);

  // Add household handler
  const addHousehold = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newHousehold = {
      head: form.head.value,
      members: parseInt(form.members.value),
      location: form.location.value,
    };

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_BASE}/households`, newHousehold, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Add the new household to the table
      setHouseholds([res.data.household, ...households]);

      form.reset();
      alert("Household submitted for approval!");
    } catch (err) {
      console.error(err);
      alert("Error submitting household.");
    }
  };

  if (loading) return <p>Loading households...</p>;

  return (
    <div className="isibo-page-container">
      <h1 className="isibo-title">Add Household</h1>

      <div className="isibo-card">
        <form className="form" onSubmit={addHousehold}>
          <label className="field">
            <span>Household Head</span>
            <input type="text" name="head" placeholder="Enter head of household" required />
          </label>

          <label className="field">
            <span>Number of Members</span>
            <input type="number" name="members" placeholder="Enter number of members" required />
          </label>

          <label className="field">
            <span>Location / House Number</span>
            <input type="text" name="location" placeholder="Enter location" required />
          </label>

          <button type="submit" className="btn-submit">Add Household</button>
        </form>
      </div>

      <div className="isibo-card" style={{ marginTop: "2rem" }}>
        <h2>Existing Households</h2>
        {error && <p className="error">{error}</p>}
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Household Head</th>
              <th>Members</th>
              <th>Location</th>
              <th>Status</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {households.length === 0 ? (
              <tr>
                <td colSpan="6">No households added yet.</td>
              </tr>
            ) : (
              households.map((h) => (
                <tr key={h.id}>
                  <td>{h.id}</td>
                  <td>{h.head}</td>
                  <td>{h.members}</td>
                  <td>{h.location}</td>
                  <td>{h.status}</td>
                  <td>{new Date(h.date_added).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddHousehold;
