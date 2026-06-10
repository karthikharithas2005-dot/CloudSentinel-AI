const express = require("express");
const router = express.Router();

const { analyzeThreat } = require("../services/geminiService");

/* ===================================
   DEBUG ROUTE
=================================== */
router.get("/check", (req, res) => {
  res.json({
    success: true,
    message: "AI Routes Loaded",
  });
});

/* ===================================
   ANALYZE SINGLE ALERT
=================================== */
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

/* ===================================
   ANALYZE ENTIRE ENVIRONMENT
=================================== */
router.post("/environment", async (req, res) => {
  try {
    const { alerts = [] } = req.body;

    const critical = alerts.filter((a) => a.severity === "Critical").length;

    const high = alerts.filter((a) => a.severity === "High").length;

    const medium = alerts.filter((a) => a.severity === "Medium").length;

    const low = alerts.filter((a) => a.severity === "Low").length;

    const prompt = `
You are a Cloud Security Expert.

Analyze this cloud environment:

Total Alerts: ${alerts.length}
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
