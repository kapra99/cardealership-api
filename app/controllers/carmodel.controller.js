const db = require("../models");
const CarModel = db.carmodels;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    // Validate request
    if (!req.body.modelname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const carmodel = {
        modelname: req.body.modelname,
    };

    // Save Tutorial in the database
    CarModel.create(carmodel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the CarModel."
            });
        });
};
exports.findAll = (req, res) => {
    const modelname = req.query.modelname;
    var condition = modelname ? { modelname: { [Op.like]: `%${modelname}%` } } : null;

    CarModel.findAll({ where: condition })
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

    CarModel.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Carmodel with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Carmodel with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    CarModel.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carmodel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Carmodel with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Carmodel with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    CarModel.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carmodel was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Carmodel with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Carmodel with id=" + id
            });
        });
};