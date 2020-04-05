const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Projects", ProjectSchema);
