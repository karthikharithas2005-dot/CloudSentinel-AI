function ThreatFeed({ alerts }) {
  return (
    <div className="feed-container">
      <h2>🚨 Live Threat Feed</h2>

      {alerts.slice(0, 5).map((alert, index) => (
        <div
          key={index}
          className={`feed-item ${alert.severity?.toLowerCase()}`}
        >
          <strong>{alert.severity}</strong>

          <p>{alert.threat}</p>
        </div>
      ))}
    </div>
  );
}

export default ThreatFeed;
