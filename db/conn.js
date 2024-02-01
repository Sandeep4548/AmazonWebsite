
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const DB = process.env.DATABASE;
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit the application with a non-zero status code in case of an error
  }
};

module.exports = connectDB;
