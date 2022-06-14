module.exports = app => {
  const cars = require("../controllers/car.controller.js");

  var router = require("express").Router();

  router.post("/", cars.create);

  router.get("/", cars.findAll);

  router.get("/published", cars.findAllPublished);

  router.get("/:id", cars.findOne);

  router.put("/:id", cars.update);

  router.delete("/:id", cars.delete);

  // Delete all cars
  // router.delete("/", cars.deleteAll);

  app.use('/api/cars', router);
};
