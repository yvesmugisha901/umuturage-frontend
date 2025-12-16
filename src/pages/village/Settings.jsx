import { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    role: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  /* ---------------- Fetch Profile ---------------- */
  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/village/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProfile({
        username: res.data.username || "",
        email: res.data.email || "",
        role: res.data.role || ""
      });

      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch profile", err);
      setError("Failed to fetch profile");
      setLoading(false);
    }
  };

  /* ---------------- Update Profile ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.put(
        "http://localhost:5000/api/village/profile",
        {
          username: profile.username,
          email: profile.email
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Profile updated successfully");
    } catch (err) {
      console.error("Failed to update profile", err);
      setError("Failed to update profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="settings-page">
      <h2>Village Account Settings</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={profile.username}
          onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })
          }
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })
          }
          required
        />

        <label>Role</label>
        <input
          type="text"
          value={profile.role}
          disabled
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
