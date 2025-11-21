// src/pages/Settings.jsx
import React, { useEffect, useState } from "react";
import "../styles/settings.css";
import { FaCamera, FaTrash, FaSun, FaMoon, FaSave } from "react-icons/fa";

const DEFAULT_PROFILE = {
  fullName: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  phone: "+250 788 000 000",
  role: "isibo", // isibo | cell | sector | district
  avatarDataUrl: null, // base64 preview string
};

const StorageKeys = {
  PROFILE: "um_user_profile",
  THEME: "um_theme", // 'light' | 'dark'
};

const Settings = () => {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [initialProfile, setInitialProfile] = useState(DEFAULT_PROFILE);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdMessage, setPwdMessage] = useState(null);
  const [saving, setSaving] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(StorageKeys.PROFILE);
      const savedProfile = saved ? JSON.parse(saved) : null;

      const savedTheme = localStorage.getItem(StorageKeys.THEME) || "light";

      if (savedProfile) {
        setProfile(savedProfile);
        setInitialProfile(savedProfile);
      } else {
        setProfile(DEFAULT_PROFILE);
        setInitialProfile(DEFAULT_PROFILE);
      }
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } catch (err) {
      console.error("Failed to load profile/theme", err);
      setProfile(DEFAULT_PROFILE);
      setInitialProfile(DEFAULT_PROFILE);
    }
  }, []);

  // Detect changes between current and initial profile
  const hasProfileChanged = () => {
    const p1 = { ...profile };
    const p2 = { ...initialProfile };
    // ignore avatarDataUrl if both null
    return JSON.stringify(p1) !== JSON.stringify(p2);
  };

  const hasPasswordChange = () =>
    oldPassword.trim() !== "" ||
    newPassword.trim() !== "" ||
    confirmPassword.trim() !== "";

  const canSave = () => hasProfileChanged() || validPasswordForSave();

  // Simple password validation
  const validPasswordForSave = () => {
    if (!hasPasswordChange()) return false;
    if (!oldPassword || !newPassword || !confirmPassword) return false;
    if (newPassword.length < 8) return false;
    if (newPassword !== confirmPassword) return false;
    return true;
  };

  // Avatar upload handler — converts to data URL for preview
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setProfile((prev) => ({ ...prev, avatarDataUrl: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const removeAvatar = () => {
    setProfile((prev) => ({ ...prev, avatarDataUrl: null }));
  };

  const applyTheme = (t) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("u-dark");
    } else {
      root.classList.remove("u-dark");
    }
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(StorageKeys.THEME, next);
    applyTheme(next);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setPwdMessage(null);

    if (hasPasswordChange() && !validPasswordForSave()) {
      setPwdMessage(
        "Password change invalid: ensure old password is filled, new password is at least 8 characters and matches confirm."
      );
      return;
    }

    setSaving(true);

    // Simulate API delay
    setTimeout(() => {
      // Persist profile to localStorage (replace this with API call)
      try {
        localStorage.setItem(StorageKeys.PROFILE, JSON.stringify(profile));
        localStorage.setItem(StorageKeys.THEME, theme);
        setInitialProfile(profile);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setPwdMessage("Saved successfully.");
      } catch (err) {
        console.error("Save failed", err);
        setPwdMessage("Save failed — check console.");
      }
      setSaving(false);

      // clear message after short delay
      setTimeout(() => setPwdMessage(null), 3000);
    }, 900);
  };

  return (
    <div className="settings-page container">
      <h1 className="page-title">Settings</h1>

      <form className="settings-grid" onSubmit={handleSave}>
        {/* Profile Card */}
        <section className="card profile-card">
          <div className="card-header">
            <h2>Profile</h2>
            <p className="muted">Personal information and avatar</p>
          </div>

          <div className="profile-inner">
            <div className="avatar-column">
              <div className="avatar-preview">
                {profile.avatarDataUrl ? (
                  <img
                    src={profile.avatarDataUrl}
                    alt="avatar preview"
                    className="avatar-img"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {profile.fullName ? profile.fullName.charAt(0).toUpperCase() : "U"}
                  </div>
                )}

                <div className="avatar-actions">
                  <label className="avatar-upload-btn">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      aria-label="Upload profile photo"
                    />
                    <FaCamera /> Upload
                  </label>
                  {profile.avatarDataUrl && (
                    <button
                      type="button"
                      className="avatar-remove-btn"
                      onClick={removeAvatar}
                      title="Remove avatar"
                    >
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="fields-column">
              <label className="field">
                <span>Full Name</span>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  placeholder="Full name"
                />
              </label>

              <label className="field">
                <span>Username</span>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  placeholder="username"
                />
              </label>

              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="email@example.com"
                />
              </label>

              <label className="field">
                <span>Phone</span>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  placeholder="+250 7xx xxx xxx"
                />
              </label>

              <label className="field">
                <span>Role</span>
                <input type="text" value={profile.role} readOnly className="readonly" />
              </label>
            </div>
          </div>
        </section>

        {/* Account / Security Card */}
        <section className="card account-card">
          <div className="card-header">
            <h2>Account & Security</h2>
            <p className="muted">Password and security settings</p>
          </div>

          <div className="card-body">
            <label className="field">
              <span>Old Password</span>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Current password"
                autoComplete="current-password"
              />
            </label>

            <label className="field">
              <span>New Password</span>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password (min 8 chars)"
                autoComplete="new-password"
              />
            </label>

            <label className="field">
              <span>Confirm New Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                autoComplete="new-password"
              />
            </label>

            <div className="password-note muted">
              Password must be at least 8 characters. Fill old password to change.
            </div>

            {pwdMessage && <div className="status-message">{pwdMessage}</div>}
          </div>

          <div className="card-footer">
            <button
              type="submit"
              className="btn save-btn"
              disabled={!canSave() || saving}
              title={!canSave() ? "No changes to save" : "Save changes"}
            >
              <FaSave /> {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </section>

        {/* Appearance Card */}
        <section className="card appearance-card">
          <div className="card-header">
            <h2>Appearance</h2>
            <p className="muted">Dark mode and UI preferences</p>
          </div>

          <div className="card-body appearance-body">
            <div className="theme-row">
              <div className="theme-left">
                <div className="theme-preview">
                  {theme === "dark" ? <FaMoon /> : <FaSun />}
                </div>
                <div>
                  <div className="theme-title">{theme === "dark" ? "Dark" : "Light"}</div>
                  <div className="muted">Switch between light and dark themes</div>
                </div>
              </div>

              <div className="theme-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    aria-label="Toggle dark mode"
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <div className="appearance-note muted">
              Dark mode preference is stored locally and will persist across reloads.
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Settings;
