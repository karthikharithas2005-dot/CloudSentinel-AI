import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaBug,
  FaCloud,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import ThreatChart from "../components/ThreatChart";
import TrendChart from "../components/TrendChart.jsx";
import "../styles/dashboard.css";

const API_URL = import.meta.env.VITE_API_URL;

function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/logs/alerts`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAlerts(res.data);
        } else if (Array.isArray(res.data.alerts)) {
          setAlerts(res.data.alerts);
        }
      })
      .catch((err) => {
        console.error("Failed to load alerts:", err);
      });
  }, []);

  const critical = alerts.filter((a) => a.severity === "Critical").length;

  const high = alerts.filter((a) => a.severity === "High").length;

  const medium = alerts.filter((a) => a.severity === "Medium").length;

  const low = alerts.filter((a) => a.severity === "Low").length;

  const securityScore = Math.max(100 - critical * 15 - high * 5, 0);

  const status =
    securityScore >= 80
      ? "SECURE"
      : securityScore >= 60
        ? "WARNING"
        : "CRITICAL";

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        {/* HERO */}

        <div className="hero-section">
          <h1>
            <FaShieldAlt />
            CloudSentinel AI
          </h1>

          <p>
            AI Powered Cloud Threat Detection & Security Monitoring Platform
          </p>

          <button className="hero-btn">Analyze Environment</button>
        </div>

        {/* SECURITY STATUS */}

        <div className="soc-summary">
          <h3>🛡 Security Operations Center Overview</h3>

          <p>
            Current Environment Status:
            <strong> {status}</strong>
          </p>

          <p>
            Active Threats Monitored:
            <strong> {alerts.length}</strong>
          </p>
        </div>

        {/* STATS */}

        <div className="stats-grid">
          <div className="stat-card">
            <FaShieldAlt size={35} />

            <h3>Security Score</h3>

            <h1>{securityScore}</h1>
          </div>

          <div className="stat-card">
            <FaCloud size={35} />

            <h3>Total Alerts</h3>

            <h1>{alerts.length}</h1>
          </div>

          <div className="stat-card">
            <FaExclamationTriangle size={35} />

            <h3>Critical Alerts</h3>

            <h1>{critical}</h1>
          </div>

          <div className="stat-card">
            <FaBug size={35} />

            <h3>High Risk</h3>

            <h1>{high}</h1>
          </div>
        </div>

        {/* TOP THREATS */}

        <div className="top-threats">
          <h2>Top Threat Categories</h2>

          <div className="threat-tags">
            <span>Unauthorized IAM Access</span>
            <span>Privilege Escalation</span>
            <span>Suspicious Login</span>
            <span>API Abuse</span>
            <span>Data Exfiltration</span>
            <span>Malware Activity</span>
          </div>
        </div>

        {/* CHARTS */}

        <div className="charts-grid">
          <div className="chart-card">
            <h2>Threat Distribution</h2>

            <ThreatChart
              critical={critical}
              high={high}
              medium={medium}
              low={low}
            />
          </div>

          <div className="chart-card">
            <h2>Threat Trend Analysis</h2>

            <TrendChart alerts={alerts} />
          </div>
        </div>

        {/* ALERT TABLE */}

        <div className="table-card">
          <h2>Recent Security Alerts</h2>

          <table>
            <thead>
              <tr>
                <th>Threat</th>
                <th>Severity</th>
                <th>Risk Score</th>
                <th>Timestamp</th>
              </tr>
            </thead>

            <tbody>
              {alerts.length === 0 ? (
                <tr>
                  <td colSpan="4">No Alerts Found</td>
                </tr>
              ) : (
                alerts.map((alert, index) => (
                  <tr key={index}>
                    <td>{alert.threat}</td>

                    <td>{alert.severity}</td>

                    <td>{alert.riskScore}</td>

                    <td>{new Date(alert.timestamp).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
