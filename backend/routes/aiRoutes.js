const express = require("express");
const router = express.Router();

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
   TEST POST ROUTE
========================================= */
router.post("/test", (req, res) => {
  res.json({
    success: true,
    message: "AI POST Route Works",
    body: req.body,
  });
});

/* =========================================
   GEMINI THREAT ANALYSIS
========================================= */
router.post("/analyze", async (req, res) => {
  try {
    const analysis = await analyzeThreat(req.body);

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Analyze Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
