const express = require("express");
const router = express.Router();

import Project from "../models/Project";

router.get("/", (req, res) => {
  Project.find()
    .sort("descending")
    .then(projects => res.json(projects))
    .catch(err => res.json({ message: err }));
});

router.post("/new", (req, res) => {
  Project.find()
    .sort("descending")
    .then(projects => res.json(projects))
    .catch(err => res.json({ message: err }));
});

router.get("/", (req, res) => {
  Project.find()
    .sort("descending")
    .then(projects => res.json(projects))
    .catch(err => res.json({ message: err }));
});

router.delete("/delete", (req, res) => {
  Project.find()
    .sort("descending")
    .then(projects => res.json(projects))
    .catch(err => res.json({ message: err }));
});

module.exports = router;
