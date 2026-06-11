import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";

const API_URL =
  import.meta.env.VITE_API_URL || "https://cloud-sentinel-ai-uzx3.vercel.app";

function AIInsights() {
  const [analysis, setAnalysis] = useState(
    "Generating AI security insights...",
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/ai/insights`)
      .then((res) => {
        setAnalysis(res.data.analysis);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setAnalysis("Unable to generate AI insights at this time.");

        setLoading(false);
      });
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white" }}>🤖 AI Security Insights</h1>

        <div className="chart-card">
          <h2>Gemini Security Analysis</h2>

          {loading ? (
            <p style={{ color: "#cbd5e1" }}>Analyzing cloud environment...</p>
          ) : (
            <pre
              style={{
                color: "#cbd5e1",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontSize: "15px",
              }}
            >
              {analysis}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIInsights;
