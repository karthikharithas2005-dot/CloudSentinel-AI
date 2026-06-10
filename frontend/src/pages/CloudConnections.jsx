import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/cloudconnections.css";

function CloudConnections() {
  const [connections, setConnections] = useState([]);

  const connectAWS = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/cloud/connect/aws",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      alert("AWS Connected Successfully");

      setConnections((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
      alert("Connection Failed");
    }
  };

  useEffect(() => {
    const loadConnections = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/cloud/connections",
        );

        const data = await response.json();

        setConnections(data);
      } catch (error) {
        console.error("Error loading connections:", error);
      }
    };

    loadConnections();
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <div className="cloud-page">
          <h1>☁ Cloud Connections</h1>

          <p>
            Connect your cloud providers to CloudSentinel AI for monitoring and
            threat detection.
          </p>

          <div className="cloud-grid">
            <div className="cloud-card aws">
              <h2>AWS</h2>

              <p>
                Connect Amazon Web Services accounts and monitor security
                posture.
              </p>

              <button onClick={connectAWS}>Connect AWS Account</button>
            </div>

            <div className="cloud-card azure">
              <h2>Azure</h2>

              <p>Connect Microsoft Azure subscriptions and resources.</p>

              <button disabled>Coming Soon</button>
            </div>

            <div className="cloud-card gcp">
              <h2>Google Cloud</h2>

              <p>Connect GCP projects and monitor cloud security posture.</p>

              <button disabled>Coming Soon</button>
            </div>
          </div>

          <div className="connections-table">
            <h2>Connected Accounts</h2>

            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Account ID</th>
                  <th>Resources</th>
                  <th>Status</th>
                  <th>Last Sync</th>
                </tr>
              </thead>

              <tbody>
                {connections.map((connection, index) => (
                  <tr key={index}>
                    <td>{connection.provider}</td>
                    <td>{connection.accountId}</td>
                    <td>{connection.resources}</td>
                    <td>
                      {connection.connected ? "Connected" : "Disconnected"}
                    </td>
                    <td>{connection.lastSync}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudConnections;
