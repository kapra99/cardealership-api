const db = require("../models");
const CarBrand = db.carbrands;
const Op = db.Sequelize.Op;

// Create and Save a new Car Brand
exports.create = (req, res) => {
    // Validate request
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Car Brand
    const carbrand = {
        brand: req.body.brand,
    };

    // Save Car Brand in the database
    CarBrand.create(carbrand)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Car Brand."
            });
        });
};

// Retrieve all Car Brands from the database.
exports.findAll = (req, res) => {
    const brand = req.query.brand;
    var condition = brand ? { brand: { [Op.like]: `%${brand}%` } } : null;

    CarBrand.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Car Brands."
            });
        });
};

// Find a single Car Brand with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CarBrand.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Car Brand with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Car Brand with id=" + id
            });
        });
};

// Update a Car Brand by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    CarBrand.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Car Brand was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Car Brand with id=${id}. Maybe Car Brand was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Car Brand with id=" + id
            });
        });
};

// Delete a Car Brand with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CarBrand.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Car Brand was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Car Brand with id=${id}. Maybe Car Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Car Brand with id=" + id
            });
        });
};

// Delete all Car Brands from the database.
exports.deleteAll = (req, res) => {
    CarBrand.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Car Brands were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Car Brands."
            });
        });
};

// find all published Car Brand
// exports.findAllPublished = (req, res) => {
//     CarBrand.findAll({ where: { published: true } })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving Car Brands."
//             });
//         });
// };