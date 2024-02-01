require("dotenv").config();
const express = require("express");
const path = require("path"); // Add this line to import the 'path' module
const app = express();
const connectDB = require("./db/conn");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose"); 
require("./db/conn");
const products = require("./models/productsSchema");
const cors = require("cors");
const router = require("./routes/router");
const DefaultData = require("./defaultdata");



app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"client/build")));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"client","build","index.html"));
});



// Connect to MongoDB
connectDB()
  .then(() => {
    // Add default data after a successful database connection
    DefaultData();

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the application with a non-zero status code in case of an error
  });
