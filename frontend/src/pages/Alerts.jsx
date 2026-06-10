import Sidebar from "../components/Sidebar";

function Alerts() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white" }}>🚨 Security Alerts Center</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Critical Alerts</h3>
            <h1>1</h1>
          </div>

          <div className="stat-card">
            <h3>High Alerts</h3>
            <h1>3</h1>
          </div>

          <div className="stat-card">
            <h3>Medium Alerts</h3>
            <h1>2</h1>
          </div>

          <div className="stat-card">
            <h3>Low Alerts</h3>
            <h1>4</h1>
          </div>
        </div>

        <div className="table-card">
          <h2>Active Threat Feed</h2>
          <p>Live alerts from MongoDB will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
