const db = require("../models");
const Car = db.cars;
const Op = db.Sequelize.Op;
// Create and Save a new Car
exports.create = (req, res) => {
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const car = {
        brand: req.body.brand,
        model: req.body.model,
        dateofmanifactory: req.body.dateofmanifactory,
        engineapacity: req.body.engineapacity,
        numberofcylinders: req.body.numberofcylinders,
        enginetype: req.body.enginetype,
        fueltype: req.body.fueltype,
        additionalinformation: req.body.additionalinformation,
        price: req.body.price,

    };
    // Save Tutorial in the database
    Car.create(car)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
// // Retrieve all Cars from the database.
// exports.findAll = (req, res) => {
//
// };
// // Find a single Car with an id
// exports.findOne = (req, res) => {
//
// };
// // Update a Car by the id in the request
// exports.update = (req, res) => {
//
// };
// // Delete a Car with the specified id in the request
// exports.delete = (req, res) => {
//
// };
// // Delete all Cars from the database.
// exports.deleteAll = (req, res) => {
//
// };
// // Find all published Cars
// exports.findAllPublished = (req, res) => {
//
// };