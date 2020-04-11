const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  headerIageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
