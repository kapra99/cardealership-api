const carbrands = require("../controllers/carbrand.controller");
module.exports = app => {
    const carbrand = require("../controllers/carbrand.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", carbrand.create);
    // router.post("/", cars.create);
    // Retrieve all carbrands
    router.get("/", carbrand.findAll);
    // // Retrieve all published cars
    // // Retrieve a single Tutorial with id
    router.get("/:id", carbrand.findOne);
    // // Update a Tutorial with id
    router.put("/:id", carbrand.update);
    // // Delete a Tutorial with id
    router.delete("/:id", carbrand.delete);
    app.use('/api/carbrand', router);
};