const express = require("express");
const router = express.Router();

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
