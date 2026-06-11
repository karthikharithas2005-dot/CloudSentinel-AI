import { useState } from "react";
import { FaShieldAlt, FaLock, FaUser } from "react-icons/fa";
import "../styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "admin" && password.trim() === "cloud123") {
      localStorage.setItem("isLoggedIn", "true");

      window.location.replace("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <FaShieldAlt className="login-logo" />

        <h1>CloudSentinel AI</h1>

        <p>Cloud Security Monitoring Platform</p>

        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login Securely</button>

        <div className="demo-creds">
          Demo Login: <b>admin</b> / <b>cloud123</b>
        </div>

        <div className="security-badge">● SOC MONITORING ACTIVE</div>
      </div>
    </div>
  );
}

export default Login;
