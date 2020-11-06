const express = require("express");
const router = express.Router();

const Project = require("../models/Project");

// fetch all projects
router.get("/", (req, res) => {
  Project.find()
    .sort("descending")
    .then((projects) => res.json(projects))
    .catch((err) => res.json({ message: err }));
});

// fetch a specific product
router.get("/:id", (req, res) => {
  Project.findOne({ _id: req.params.id })
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add a new project
router.post("/new", (req, res) => {
  const newProject = new Project({
    category: req.body.category,
    name: req.body.name,
    projectLink: req.body.projectLink,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  Project.create(newProject)
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// update an existing project
router.post("/:id/update", (req, res) => {
  Project.findById(req.params.id)
    .then((data) => {
      data.category = req.body.category;
      data.name = req.body.name;
      data.slogan = req.body.slogan;
      data.description = req.body.description;
      data.imageUrl = req.body.imageUrl;
      data
        .save()
        .then((dbProject) => {
          res.json(dbProject);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete a project
router.delete("/:id/delete", (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
