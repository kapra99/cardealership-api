module.exports = app => {
  const cars = require("../controllers/car.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cars.create);

  // Retrieve all Tutorials
  // router.get("/", cars.findAll);

  // Retrieve all published cars
  // router.get("/published", cars.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/:id", cars.findOne);

  // Update a Tutorial with id
  // router.put("/:id", cars.update);

  // Delete a Tutorial with id
  // router.delete("/:id", cars.delete);

  // Delete all cars
  // router.delete("/", cars.deleteAll);

  app.use('/api/cars', router);
};
