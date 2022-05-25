const db = require("../models");
const CarBrand = db.carbrands;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const carbrand = {
        brand: req.body.brand
    };

    // Save Tutorial in the database
    CarBrand.create(carbrand)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the CarBrand."
            });
        });
};
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
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    CarBrand.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Carbrand with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Carbrand with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    CarBrand.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carbrand was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Carbrand with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    CarBrand.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carbrand was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Carbrand with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};
