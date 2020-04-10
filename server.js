const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);

mongoose
  .connect(process.env.MONGODB_URI || "some-local-fatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

// I can do all things through Christ who strenthens me. Amen
