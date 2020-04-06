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
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
    image1: req.body.image1,
    image2: req.body.image2,
    image3: req.body.image3,
    description: req.body.description,
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
      data.name = req.body.name;
      data.price = req.body.price;
      data.size = req.body.size;
      data.image1 = req.body.image1;
      data.image2 = req.body.image2;
      data.image3 = req.body.image3;
      data.description = req.body.description;

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
router.delete("/:id", (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
