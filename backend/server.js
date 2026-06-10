require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");

const logRoutes = require("./routes/logRoutes");
const aiRoutes = require("./routes/aiRoutes");
const cloudRoutes = require("./routes/cloudRoutes");

const app = express();

// Connect MongoDB
//connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/logs", logRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/cloud", cloudRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("CloudSentinel AI Backend Running");
});

// Test GET Route
app.get("/hello", (req, res) => {
  res.send("HELLO WORKS");
});

// Test POST Route
app.post("/test", (req, res) => {
  res.json({
    message: "Test route works",
  });
});

// Debug POST Route
app.post("/api/debug-post", (req, res) => {
  res.json({
    success: true,
    body: req.body,
  });
});

// API Test Route
app.post("/api/test-post", (req, res) => {
  res.json({
    success: true,
    message: "POST API works",
  });
});

// Local development only
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("SERVER FILE LOADED");
  });
}

// Export app for Vercel
module.exports = app;
