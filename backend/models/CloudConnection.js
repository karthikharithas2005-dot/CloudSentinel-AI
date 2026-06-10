const mongoose = require("mongoose");

const CloudConnectionSchema = new mongoose.Schema({
  provider: String,
  accountId: String,
  resources: Number,
  connected: Boolean,
  lastSync: String,
});

module.exports = mongoose.model("CloudConnection", CloudConnectionSchema);
