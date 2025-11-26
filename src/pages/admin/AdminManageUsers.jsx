// src/pages/admin/AdminManageUsers.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";
import { FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const AdminManageUsers = () => {
  const [search, setSearch] = useState("");

  // Junk data (replace with backend)
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "District Admin",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Uwase",
      role: "Sector Leader",
      email: "jane@sector.gov.rw",
    },
    {
      id: 3,
      name: "Patrick Mugabo",
      role: "Cell Leader",
      email: "patrick@cell.gov.rw",
    },
    {
      id: 4,
      name: "Alice Umutoni",
      role: "Village Leader",
      email: "alice@village.gov.rw",
    },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Manage Users</h1>
      <p className="admin-subtitle">View, edit and manage all system users</p>

      {/* Search Bar */}
      <div className="admin-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name, role, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th className="actions-column">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <span className="role-badge">{user.role}</span>
                </td>

                <td className="actions-column">
                  <button className="table-action view">
                    <FaEye />
                  </button>
                  <button className="table-action edit">
                    <FaEdit />
                  </button>
                  <button className="table-action delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="no-results">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUsers;
