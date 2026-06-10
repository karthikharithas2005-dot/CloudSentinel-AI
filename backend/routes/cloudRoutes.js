const express = require("express");
const router = express.Router();

const CloudConnection = require("../models/CloudConnection");

router.post("/connect/aws", async (req, res) => {
  try {
    const connection = new CloudConnection({
      provider: "AWS",
      accountId: "aws-demo-001",
      resources: 245,
      connected: true,
      lastSync: new Date().toLocaleString(),
    });

    await connection.save();

    res.json(connection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/connections", async (req, res) => {
  const data = await CloudConnection.find();
  res.json(data);
});

module.exports = router;
