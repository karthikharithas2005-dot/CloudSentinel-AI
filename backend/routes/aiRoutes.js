const express = require("express");
const router = express.Router();

const Alert = require("../models/Alert");
const { analyzeThreat } = require("../services/geminiService");

/* =========================================
   CHECK ROUTE
========================================= */
router.get("/check", (req, res) => {
  res.json({
    success: true,
    message: "AI Routes Loaded",
  });
});

/* =========================================
   GEMINI ENV CHECK
========================================= */
router.get("/gemini-check", (req, res) => {
  res.json({
    keyExists: !!process.env.GEMINI_API_KEY,
    keyLength: process.env.GEMINI_API_KEY
      ? process.env.GEMINI_API_KEY.length
      : 0,
  });
});

/* =========================================
   AI INSIGHTS USING GEMINI
========================================= */
router.get("/insights", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 }).limit(5);

    if (alerts.length === 0) {
      return res.json({
        success: true,
        analysis:
          "No security alerts found. Environment currently appears healthy.",
      });
    }

    const formattedAlert = {
      title: alerts.map((a) => a.threat).join(", "),
      severity: alerts.map((a) => a.severity).join(", "),
      description: JSON.stringify(alerts, null, 2),
    };

    const analysis = await analyzeThreat(formattedAlert);

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("AI INSIGHTS ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
