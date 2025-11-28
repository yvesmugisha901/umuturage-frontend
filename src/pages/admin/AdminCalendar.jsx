// src/pages/admin/AdminCalendar.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";

const AdminCalendar = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Monthly Report Deadline", date: "2025-12-10" },
    { id: 2, title: "District Meeting", date: "2025-12-15" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      alert("Please fill in both fields.");
      return;
    }

    setEvents((prev) => [
      ...prev,
      { id: prev.length + 1, ...newEvent }
    ]);

    setNewEvent({ title: "", date: "" });
  };

  const handleDelete = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Admin Calendar</h1>
      <p className="admin-subtitle">Manage system-wide events and important dates</p>

      {/* Add Event Section */}
      <div className="admin-form-group mt-20">
        <label>Event Title</label>
        <input
          className="admin-input"
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          placeholder="Enter event title"
        />
      </div>

      <div className="admin-form-group">
        <label>Event Date</label>
        <input
          className="admin-input"
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
      </div>

      <button className="admin-btn admin-btn-success" onClick={handleAddEvent}>
        Add Event
      </button>

      {/* Events Table */}
      <div className="admin-table mt-40">
        <table>
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date</th>
              <th style={{ width: "120px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="3">No events available</td>
              </tr>
            ) : (
              events.map((ev) => (
                <tr key={ev.id}>
                  <td>{ev.title}</td>
                  <td>{ev.date}</td>
                  <td>
                    <button
                      className="admin-btn admin-btn-danger admin-btn-sm"
                      onClick={() => handleDelete(ev.id)}
                    >
                      Delete
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

export default AdminCalendar;
