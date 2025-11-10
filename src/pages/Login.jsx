import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css"; // create this CSS file similar to register.css

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Replace with your backend login API
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const user = response.data;

      // Example: store token if backend returns one
      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.role);

      // Role-based redirect
      switch (user.role) {
        case "isibo":
          navigate("/dashboard/isibo");
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
  );
};

export default Login;
