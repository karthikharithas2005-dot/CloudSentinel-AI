const Alert = require("../models/Alert");

async function addAlert(alert) {
  try {
    const newAlert = new Alert({
      threat: alert.threat,
      severity: alert.severity,
      riskScore: alert.riskScore || 0,
    });

    await newAlert.save();

    console.log("Alert saved to MongoDB");
  } catch (error) {
    console.error("Error saving alert:", error);
  }
}

async function getAlerts() {
  return await Alert.find().sort({ timestamp: -1 });
}

module.exports = {
  addAlert,
  getAlerts,
};
