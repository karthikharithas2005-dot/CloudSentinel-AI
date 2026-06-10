const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
  threat: String,
  severity: String,
  riskScore: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Alert", AlertSchema);
