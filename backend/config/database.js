const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Trying MongoDB connection...");

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);

    // DO NOT EXIT ON VERCEL
  }
};

module.exports = connectDB;
