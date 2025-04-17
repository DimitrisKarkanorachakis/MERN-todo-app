// Importing Mongoose
const mongoose = require("mongoose");

// Defining Task Schema
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// Creating and Exporting the Model
module.exports = mongoose.model("Task", TaskSchema);