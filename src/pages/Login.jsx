import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import Footer from "../components/Footer"; // ✅ include the Footer

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const user = response.data;

      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.role);

      switch (user.role) {
        case "isibo":
          navigate("/dashboard/isibo");
          break;
        case "village":
          navigate("/dashboard/village");
          break;
        case "cell":
          navigate("/dashboard/cell");
          break;
        case "sector":
          navigate("/dashboard/sector");
          break;
        case "district":
          navigate("/dashboard/district");
          break;
        default:
          navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="page-wrapper"> {/* wrap everything for flex layout */}
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
     
    </div>
  );
};

export default Login;
