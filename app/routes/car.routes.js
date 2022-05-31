module.exports = app => {
    const tutorials = require("../controllers/car.controller.js");
    var router = require("express").Router();
    router.post("/", tutorials.create);
};