import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
  {
    images: Array,
    name: String,
    desc: String,
    bed: Number,
    room: String,
  },
  { timestamps: true }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);

export default Projects;
