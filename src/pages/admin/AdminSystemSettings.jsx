// src/pages/admin/AdminSystemSettings.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";

const AdminSystemSettings = () => {
  // Dummy state for settings
  const [settings, setSettings] = useState({
    siteName: "Village Management System",
    timezone: "GMT+2",
    enableNotifications: true,
    maxHouseholdsPerVillage: 50,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    // Here you would send settings to backend
    alert("Settings saved successfully!");
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">System Settings</h1>
      <p className="admin-subtitle">Configure system-wide preferences and limits</p>

      <div className="admin-form-group mt-20">
        <label>Site Name</label>
        <input
          className="admin-input"
          type="text"
          name="siteName"
          value={settings.siteName}
          onChange={handleChange}
        />
      </div>

      <div className="admin-form-group">
        <label>Timezone</label>
        <select
          className="admin-select"
          name="timezone"
          value={settings.timezone}
          onChange={handleChange}
        >
          <option value="GMT+0">GMT+0</option>
          <option value="GMT+1">GMT+1</option>
          <option value="GMT+2">GMT+2</option>
          <option value="GMT+3">GMT+3</option>
        </select>
      </div>

      <div className="admin-form-group">
        <label>
          <input
            type="checkbox"
            name="enableNotifications"
            checked={settings.enableNotifications}
            onChange={handleChange}
          />
          Enable System Notifications
        </label>
      </div>

      <div className="admin-form-group">
        <label>Max Households per Village</label>
        <input
          type="number"
          className="admin-input"
          name="maxHouseholdsPerVillage"
          value={settings.maxHouseholdsPerVillage}
          onChange={handleChange}
          min={1}
          max={200}
        />
      </div>

      <button className="admin-btn admin-btn-success mt-20" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default AdminSystemSettings;
