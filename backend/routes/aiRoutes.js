const express = require("express");
const router = express.Router();

/*
 * Gemini temporarily disabled for debugging
 * Uncomment later:
 *
 * const { analyzeThreat } = require("../services/geminiService");
 */

/* =========================================
   DEBUG ROUTE
========================================= */
router.get("/check", (req, res) => {
  res.json({
    success: true,
    message: "AI Routes Loaded",
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
   TEMPORARY ANALYZE ROUTE
========================================= */
router.post("/analyze", (req, res) => {
  res.json({
    success: true,
    message: "Analyze route reached successfully",
    receivedData: req.body,
  });
});

/* =========================================
   TEMPORARY ENVIRONMENT ROUTE
========================================= */
router.post("/environment", (req, res) => {
  res.json({
    success: true,
    message: "Environment route reached successfully",
    receivedData: req.body,
  });
});

module.exports = router;
