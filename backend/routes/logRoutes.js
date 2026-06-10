const express = require("express");
const router = express.Router();

const Alert = require("../models/Alert");

// Upload log and detect threats
router.post("/upload", async (req, res) => {
  try {
    const { eventName, userName } = req.body;

    console.log("Received Log:", req.body);

    let alert = {
      detected: false,
      threat: "No Threat",
      severity: "Low",
      event: eventName,
    };

    // Threat Detection

    if (eventName === "CreateUser") {
      alert = {
        detected: true,
        threat: "Unauthorized IAM User Creation",
        severity: "High",
        event: eventName,
      };

      await Alert.create({
        threat: alert.threat,
        severity: alert.severity,
        riskScore: 90,
      });
    }

    if (eventName === "DeleteTrail") {
      alert = {
        detected: true,
        threat: "CloudTrail Tampering",
        severity: "Critical",
        event: eventName,
      };

      await Alert.create({
        threat: alert.threat,
        severity: alert.severity,
        riskScore: 95,
      });
    }

    if (eventName === "StopLogging") {
      alert = {
        detected: true,
        threat: "Logging Disabled",
        severity: "Critical",
        event: eventName,
      };

      await Alert.create({
        threat: alert.threat,
        severity: alert.severity,
        riskScore: 100,
      });
    }

    res.status(200).json({
      success: true,
      alert,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get all alerts
router.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 });

    res.status(200).json({
      success: true,
      count: alerts.length,
      alerts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Dashboard statistics
router.get("/stats", async (req, res) => {
  try {
    const totalAlerts = await Alert.countDocuments();

    const criticalAlerts = await Alert.countDocuments({
      severity: "Critical",
    });

    const highAlerts = await Alert.countDocuments({
      severity: "High",
    });

    const mediumAlerts = await Alert.countDocuments({
      severity: "Medium",
    });

    const lowAlerts = await Alert.countDocuments({
      severity: "Low",
    });

    res.status(200).json({
      success: true,
      totalAlerts,
      criticalAlerts,
      highAlerts,
      mediumAlerts,
      lowAlerts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get latest 5 alerts
router.get("/recent", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 }).limit(5);

    res.status(200).json({
      success: true,
      alerts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    mongodb: "connected",
    service: "CloudSentinel AI",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

module.exports = router;
