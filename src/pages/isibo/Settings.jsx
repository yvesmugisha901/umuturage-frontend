import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/settings.css";
import { FaCamera, FaTrash, FaSun, FaMoon, FaSave } from "react-icons/fa";

const DEFAULT_PROFILE = {
  fullName: "John Doe",
  username: "",
  email: "",
  phone: "+250 788 000 000",
  role: "isibo",
  avatarDataUrl: null,
};

const StorageKeys = {
  PROFILE: "um_isibo_profile",
  THEME: "um_isibo_theme",
};

const IsiboSettings = () => {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [initialProfile, setInitialProfile] = useState(DEFAULT_PROFILE);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdMessage, setPwdMessage] = useState(null);
  const [saving, setSaving] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load settings from server on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/isibo/settings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userSettings = res.data.settings;
        const updatedProfile = {
          ...profile,
          username: userSettings.username,
          email: userSettings.email,
        };
        setProfile(updatedProfile);
        setInitialProfile(updatedProfile);

        // Load theme from localStorage
        const savedTheme = localStorage.getItem(StorageKeys.THEME) || "light";
        setTheme(savedTheme);
        applyTheme(savedTheme);
      } catch (err) {
        console.error("Failed to load settings", err);
      }
    };
    fetchSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasProfileChanged = () => JSON.stringify(profile) !== JSON.stringify(initialProfile);
  const hasPasswordChange = () => oldPassword || newPassword || confirmPassword;
  const validPasswordForSave = () => {
    if (!hasPasswordChange()) return false;
    if (!oldPassword || !newPassword || !confirmPassword) return false;
    if (newPassword.length < 8) return false;
    if (newPassword !== confirmPassword) return false;
    return true;
  };
  const canSave = () => hasProfileChanged() || validPasswordForSave();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setProfile((prev) => ({ ...prev, avatarDataUrl: ev.target.result }));
    reader.readAsDataURL(file);
  };
  const removeAvatar = () => setProfile((prev) => ({ ...prev, avatarDataUrl: null }));

  const applyTheme = (t) => {
    const root = document.documentElement;
    if (t === "dark") root.classList.add("u-dark");
    else root.classList.remove("u-dark");
  };
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(StorageKeys.THEME, next);
    applyTheme(next);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (hasPasswordChange() && !validPasswordForSave()) {
      setPwdMessage(
        "Password change invalid. Ensure old password is filled, new password is 8+ chars and matches confirm."
      );
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const payload = {
        username: profile.username,
        email: profile.email,
        password: newPassword ? newPassword : undefined,
      };
      await axios.put("http://localhost:5000/api/isibo/settings", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setInitialProfile(profile);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPwdMessage("Saved successfully.");

      // Persist locally for instant UI
      localStorage.setItem(StorageKeys.PROFILE, JSON.stringify(profile));
      localStorage.setItem(StorageKeys.THEME, theme);
    } catch (err) {
      console.error(err);
      setPwdMessage("Failed to save settings.");
    } finally {
      setSaving(false);
      setTimeout(() => setPwdMessage(null), 3000);
    }
  };

  return (
    <div className="settings-page container">
      <h1 className="page-title">Isibo Settings</h1>
      <form className="settings-grid" onSubmit={handleSave}>
        {/* Profile Card */}
        <section className="card profile-card">
          <div className="card-header">
            <h2>Profile</h2>
          </div>
          <div className="profile-inner">
            <div className="avatar-column">
              <div className="avatar-preview">
                {profile.avatarDataUrl ? (
                  <img src={profile.avatarDataUrl} alt="avatar preview" className="avatar-img" />
                ) : (
                  <div className="avatar-placeholder">{profile.fullName.charAt(0).toUpperCase()}</div>
                )}
                <div className="avatar-actions">
                  <label className="avatar-upload-btn">
                    <input type="file" accept="image/*" onChange={handleAvatarChange} />
                    <FaCamera /> Upload
                  </label>
                  {profile.avatarDataUrl && (
                    <button type="button" className="avatar-remove-btn" onClick={removeAvatar}>
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
                />
              </label>
              <label className="field">
                <span>Username</span>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Phone</span>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Role</span>
                <input type="text" value={profile.role} readOnly className="readonly" />
              </label>
            </div>
          </div>
        </section>

        {/* Account Card */}
        <section className="card account-card">
          <div className="card-header">
            <h2>Account & Security</h2>
          </div>
          <div className="card-body">
            <label className="field">
              <span>Old Password</span>
              <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </label>
            <label className="field">
              <span>New Password</span>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </label>
            <label className="field">
              <span>Confirm New Password</span>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            {pwdMessage && <div className="status-message">{pwdMessage}</div>}
          </div>
          <div className="card-footer">
            <button type="submit" className="btn save-btn" disabled={!canSave() || saving}>
              <FaSave /> {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </section>

        {/* Appearance Card */}
        <section className="card appearance-card">
          <div className="card-header">
            <h2>Appearance</h2>
          </div>
          <div className="card-body appearance-body">
            <div className="theme-row">
              <div className="theme-left">
                <div className="theme-preview">{theme === "dark" ? <FaMoon /> : <FaSun />}</div>
                <div className="theme-title">{theme === "dark" ? "Dark" : "Light"}</div>
              </div>
              <div className="theme-toggle">
                <label className="switch">
                  <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                  <span className="slider" />
                </label>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default IsiboSettings;
