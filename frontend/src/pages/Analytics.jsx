import Sidebar from "../components/Sidebar";
import {
  FaChartLine,
  FaShieldAlt,
  FaBug,
  FaExclamationTriangle,
} from "react-icons/fa";

function Analytics() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white", marginBottom: "30px" }}>
          📈 Security Analytics Dashboard
        </h1>

        <div className="stats-grid">
          <div className="stat-card">
            <FaShieldAlt size={40} />
            <h3>Security Score</h3>
            <h1>92</h1>
          </div>

          <div className="stat-card">
            <FaExclamationTriangle size={40} />
            <h3>Total Threats</h3>
            <h1>18</h1>
          </div>

          <div className="stat-card">
            <FaBug size={40} />
            <h3>Malware Events</h3>
            <h1>6</h1>
          </div>

          <div className="stat-card">
            <FaChartLine size={40} />
            <h3>Blocked Attacks</h3>
            <h1>147</h1>
          </div>
        </div>

        <div className="chart-card" style={{ marginTop: "30px" }}>
          <h2>Threat Analytics Summary</h2>

          <p style={{ color: "#cbd5e1", lineHeight: "2" }}>
            • Most attacks originated from suspicious IAM activity.
            <br />
            • 147 attacks blocked in the last 24 hours.
            <br />
            • Security posture improved by 8%.
            <br />
            • No active ransomware detected.
            <br />• API abuse attempts increased by 12%.
          </p>
        </div>

        <div className="table-card" style={{ marginTop: "30px" }}>
          <h2>Top Threat Categories</h2>

          <table>
            <thead>
              <tr>
                <th>Threat Type</th>
                <th>Count</th>
                <th>Risk Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Unauthorized IAM Access</td>
                <td>8</td>
                <td>High</td>
              </tr>

              <tr>
                <td>Privilege Escalation</td>
                <td>4</td>
                <td>Critical</td>
              </tr>

              <tr>
                <td>API Abuse</td>
                <td>3</td>
                <td>Medium</td>
              </tr>

              <tr>
                <td>Malware Detection</td>
                <td>3</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
