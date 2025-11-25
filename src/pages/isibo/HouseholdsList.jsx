import React from "react";
import "../../styles/isiboPages.css";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";

const HouseholdsList = () => {

  // Example junk data for households
  const households = [
    { id: 1, name: "Household A", head: "John Doe", members: 5 },
    { id: 2, name: "Household B", head: "Jane Doe", members: 4 },
    { id: 3, name: "Household C", head: "Alice Mukamana", members: 6 },
    { id: 4, name: "Household D", head: "Eric Nkurunziza", members: 3 },
    { id: 5, name: "Household E", head: "Sophie Uwimana", members: 7 },
  ];

  const handleEdit = (id) => alert(`Edit household with ID: ${id}`);
  const handleDelete = (id) => alert(`Delete household with ID: ${id}`);
  const handleDownloadCSV = () => alert("Download CSV triggered");

  return (
    <div className="isibo-page-container">
      <div className="isibo-header">
        <h1 className="isibo-title">Households List</h1>
        <p>All households registered under this Isibo.</p>
      </div>

      {/* Actions */}
      <div className="isibo-actions">
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      {/* Households Table */}
      <div className="section">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Household Name</th>
              <th>Head of Household</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {households.map((hh) => (
              <tr key={hh.id}>
                <td>{hh.id}</td>
                <td>{hh.name}</td>
                <td>{hh.head}</td>
                <td>{hh.members}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(hh.id)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(hh.id)}>
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseholdsList;
