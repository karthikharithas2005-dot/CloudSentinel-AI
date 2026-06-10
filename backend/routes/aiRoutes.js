const express = require("express");
const router = express.Router();

const { analyzeThreat } = require("../services/geminiService");

// Analyze Single Alert
router.post("/analyze", async (req, res) => {
  try {
    const alert = req.body;

    const analysis = await analyzeThreat({
      title: alert.title || "Security Alert",
      severity: alert.severity || "Medium",
      description: alert.description || "No description provided",
    });

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("AI Analyze Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Analyze Entire Environment
router.post("/environment", async (req, res) => {
  try {
    const { alerts } = req.body;

    const critical =
      alerts?.filter((a) => a.severity === "Critical").length || 0;

    const high = alerts?.filter((a) => a.severity === "High").length || 0;

    const medium = alerts?.filter((a) => a.severity === "Medium").length || 0;

    const low = alerts?.filter((a) => a.severity === "Low").length || 0;

    const prompt = `
You are a Cloud Security Expert.

Analyze this cloud environment:

Total Alerts: ${alerts?.length || 0}
Critical Alerts: ${critical}
High Alerts: ${high}
Medium Alerts: ${medium}
Low Alerts: ${low}

Provide:

1. Threat Summary
2. Business Impact
3. Recommended Actions
4. Risk Assessment
`;

    const analysis = await analyzeThreat({
      title: "Cloud Environment Analysis",
      severity:
        critical > 0
          ? "Critical"
          : high > 0
            ? "High"
            : medium > 0
              ? "Medium"
              : "Low",
      description: prompt,
    });

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Environment Analysis Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
