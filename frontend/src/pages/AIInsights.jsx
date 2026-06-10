import Sidebar from "../components/Sidebar";

function AIInsights() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white" }}>🤖 AI Security Insights</h1>

        <div className="chart-card">
          <h2>AI Recommendation</h2>

          <p style={{ color: "#cbd5e1" }}>
            Privilege Escalation attempts have increased. Enable MFA for all
            admin accounts.
          </p>
        </div>

        <div className="chart-card" style={{ marginTop: "20px" }}>
          <h2>Threat Prediction</h2>

          <p style={{ color: "#cbd5e1" }}>
            Predicted risk level for next 24 hours:
            <strong> Medium</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;
