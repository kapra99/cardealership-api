module.exports = app => {
    const carmodel = require("../controllers/carmodel.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", carmodel.create);
    // Retrieve all carbrands
    router.get("/", carmodel.findAll);
    // // Retrieve all published cars
    // // Retrieve a single Tutorial with id
    router.get("/:id", carmodel.findOne);
    // // Update a Tutorial with id
    router.put("/:id", carmodel.update);
    // // Delete a Tutorial with id
    router.delete("/:id", carmodel.delete);
    app.use('/api/carmodel', router);
};