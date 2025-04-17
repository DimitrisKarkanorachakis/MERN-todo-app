const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Configuring the Express App
dotenv.config();

const app = express();

// Setting Up Middleware
app.use(cors());
app.use(express.json());

// Connecting to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
    process.exit(1); // Exit process with failure
  }
};

// Call the database connection function
connectDB();

// Defining Routes
const tasksRoutes = require("./routes/tasks");
app.use("/api/tasks", tasksRoutes);

// Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
