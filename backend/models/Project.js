const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  tags: [String],
  demoUrl: String,
  githubUrl: String
});

module.exports = mongoose.model("Project", projectSchema);