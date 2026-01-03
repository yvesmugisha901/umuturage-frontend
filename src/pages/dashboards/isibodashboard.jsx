import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/isiboDashboard.css";
import { API_BASE, getAuthHeaders } from "../../utils/config.js";

const IsiboDashboard = () => {
  const [households, setHouseholds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRequestsSent, setTotalRequestsSent] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);
  const [error, setError] = useState("");

  // Fetch households & reports from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Unauthorized. Please login.");

        // Fetch households
        const resHouseholds = await axios.get(`${API_BASE}/households`, {
          headers: getAuthHeaders(),
        });

        const fetchedHouseholds = Array.isArray(resHouseholds.data)
          ? resHouseholds.data
          : resHouseholds.data.households || [];

        setHouseholds(fetchedHouseholds);
        setTotalRequestsSent(fetchedHouseholds.length);

        // Fetch pending approvals if backend supports
        const resReports = await axios.get(`${API_BASE}/reports`, {
          headers: getAuthHeaders(),
        });
        setPendingApprovals(resReports.data.pendingApprovals || 0);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load data. Check backend or login.");
        setHouseholds([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add new household
  const addHousehold = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newHousehold = {
      head: form.head.value,
      members: parseInt(form.members.value),
      location: form.location.value,
    };

    try {
      const res = await axios.post(`${API_BASE}/households`, newHousehold, {
        headers: getAuthHeaders(),
      });

      setHouseholds([res.data.household, ...households]);
      setTotalRequestsSent(totalRequestsSent + 1);
      form.reset();
      alert("Household submitted for Cell approval!");
    } catch (err) {
      console.error(err);
      alert("Error submitting household. Check backend or login.");
    }
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main className="dashboard-content">
          <header className="dashboard-header">
            <h1>Isibo Dashboard</h1>
            <p>Manage households and send updates to your Cell leader.</p>
          </header>

          {error && <p className="error">{error}</p>}

          <section className="cards-container">
            <div className="card blue">
              <h3>Total Households</h3>
              <p>{households.length}</p>
            </div>
            <div className="card green">
              <h3>Requests Sent</h3>
              <p>{totalRequestsSent}</p>
            </div>
            <div className="card orange">
              <h3>Pending Approvals</h3>
              <p>{pendingApprovals}</p>
            </div>
          </section>

          <section className="section">
            <h2>Add New Household</h2>
            <form className="form" onSubmit={addHousehold}>
              <input type="text" name="head" placeholder="Head of Household Name" required />
              <input type="number" name="members" placeholder="Number of Members" required />
              <input type="text" name="location" placeholder="House Number / Location" required />
              <button className="btn-submit">Submit Household</button>
            </form>
          </section>

          <section className="section">
            <h2>Existing Households</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Household Head</th>
                  <th>Members</th>
                  <th>Location</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {households.map((h) => (
                  <tr key={h.id}>
                    <td>{h.head}</td>
                    <td>{h.members}</td>
                    <td>{h.location}</td>
                    <td>{h.date_added?.split("T")[0] ?? "–"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default IsiboDashboard;
