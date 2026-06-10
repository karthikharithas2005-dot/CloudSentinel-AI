import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white" }}>⚙️ Platform Settings</h1>

        <div className="chart-card">
          <h2>Notifications</h2>

          <p style={{ color: "#cbd5e1" }}>Email Alerts: Enabled</p>

          <p style={{ color: "#cbd5e1" }}>SMS Alerts: Enabled</p>
        </div>

        <div className="chart-card" style={{ marginTop: "20px" }}>
          <h2>Cloud Provider</h2>

          <p style={{ color: "#cbd5e1" }}>AWS Monitoring Active</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
