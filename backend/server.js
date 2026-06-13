require("dotenv").config();

console.log(process.env.MONGO_URI);

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;
app.use("/api/projects", projectRoutes);

const Project = require("./models/Project");

app.get("/add-project", async (req, res) => {
  const project = await Project.create({
    title: "3D Portfolio",
    description: "Portfolio built using React",
    github: "https://github.com/nandhini-stars/3D-Portfolio",
    demo: "https://youtube.com"
  });

  res.json(project);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});