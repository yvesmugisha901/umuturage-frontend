// src/pages/dashboards/isibo/HouseholdsList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/isiboPages.css";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";

const API_BASE = "http://localhost:5000/api/isibo";

const HouseholdsList = () => {
  const [households, setHouseholds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch households from backend
  useEffect(() => {
    const fetchHouseholds = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE}/households`, {
          headers: { Authorization: `Bearer ${token}` },
        });
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

  // Delete household
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this household?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/households/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHouseholds(households.filter((h) => h.id !== id));
      alert("Household deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete household.");
    }
  };

  // Edit household
  const handleEdit = async (id) => {
    const household = households.find((h) => h.id === id);
    const newHead = prompt("Update Household Head:", household.head);
    const newMembers = prompt("Update Members:", household.members);
    const newLocation = prompt("Update Location:", household.location);

    if (!newHead || !newMembers || !newLocation) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_BASE}/households/${id}`,
        { head: newHead, members: parseInt(newMembers), location: newLocation },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setHouseholds(
        households.map((h) => (h.id === id ? res.data.household : h))
      );
      alert("Household updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update household.");
    }
  };

  // Download CSV
  const handleDownloadCSV = () => {
    if (!households.length) return alert("No data to download!");

    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Head,Members,Location,Status,Date Added"]
        .concat(
          households.map(
            (h) =>
              `${h.id},${h.head},${h.members},${h.location},${h.status},${new Date(
                h.date_added
              ).toLocaleDateString()}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "households.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p>Loading households...</p>;

  return (
    <div className="isibo-page-container">
      <div className="isibo-header">
        <h1 className="isibo-title">Households List</h1>
        <p>All households registered under this Isibo.</p>
      </div>

      <div className="isibo-actions">
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="section">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Household Head</th>
              <th>Members</th>
              <th>Location</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {households.length === 0 ? (
              <tr>
                <td colSpan="7">No households added yet.</td>
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
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(h.id)}>
                      <FaEdit /> Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(h.id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseholdsList;
