import React, { useEffect, useState } from "react";
import "../../styles/villagePages.css";

const ApproveVillageData = () => {
  const [pendingUpdates, setPendingUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPendingUpdates = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view pending updates.");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:5000/api/village/pending-updates", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server response:", text);
        throw new Error(`Failed to fetch pending updates: ${res.status}`);
      }

      const data = await res.json();
      setPendingUpdates(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch pending updates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingUpdates();
  }, []);

  const handleApprove = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;

    // CHANGE THIS LINE - use pending-updates, not households
    const res = await fetch(`http://localhost:5000/api/village/pending-updates/${id}/approve`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to approve household");
    alert("Household approved successfully!");
    fetchPendingUpdates(); // refresh table
  } catch (err) {
    console.error(err);
    setError(err.message || "Failed to approve household");
  }
};

const handleReject = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;

    // CHANGE THIS LINE - use pending-updates, not households
    const res = await fetch(`http://localhost:5000/api/village/pending-updates/${id}/reject`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to reject household");
    alert("Household rejected successfully!");
    fetchPendingUpdates(); // refresh table
  } catch (err) {
    console.error(err);
    setError(err.message || "Failed to reject household");
  }
};
  
  return (
    <div className="village-page-container">
      <h1 className="village-title">Approve Isibo Data</h1>

      {loading ? (
        <p>Loading pending updates...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : pendingUpdates.length === 0 ? (
        <p>No pending households to approve.</p>
      ) : (
        <table className="village-data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Isibo</th>
              <th>Household Head</th>
              <th>Members</th>
              <th>Location</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingUpdates.map((update, index) => (
              <tr key={update.id}>
                <td>{index + 1}</td>
                <td>{update.isibo_name}</td>
                <td>{update.head}</td>
                <td>{update.members}</td>
                <td>{update.location}</td>
                <td>{new Date(update.date_added).toLocaleDateString()}</td>
                <td>
                  <button
                    className="village-btn village-btn-approve"
                    onClick={() => handleApprove(update.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="village-btn village-btn-delete"
                    onClick={() => handleReject(update.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApproveVillageData;