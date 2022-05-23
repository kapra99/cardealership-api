module.exports = app => {
    const carbrands = require("../controllers/carbrand.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", carbrands.create);
    // Retrieve all carbrands
    router.get("/", carbrands.findAll);
    // Retrieve all published carbrands
    // router.get("/published", carbrands.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", carbrands.findOne);
    // Update a Tutorial with id
    router.put("/:id", carbrands.update);
    // Delete a Tutorial with id
    router.delete("/:id", carbrands.delete);
    // Delete all carbrands
    router.delete("/", carbrands.deleteAll);
    app.use('/api/carbrands', router);
};