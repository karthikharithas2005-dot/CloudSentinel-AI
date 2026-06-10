const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("================================");
  console.log("Trying MongoDB connection...");
  console.log("URI Exists:", !!process.env.MONGODB_URI);
  console.log("================================");

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("================================");
    console.log("MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
    console.log("================================");
  } catch (error) {
    console.error("================================");
    console.error("MongoDB Connection Failed");
    console.error(error.message);
    console.error("================================");
  }
};

module.exports = connectDB;
