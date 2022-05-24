const db = require("../models");
const CarBrand = db.carbrands;
const CarModel = db.carmodels;

// Create and Save new Tutorials
exports.createCarBrand = (carbrand) => {
    return CarBrand.create({
        brand: carbrand.brand,
    })
        .then((carbrand) => {
            console.log(">> Created tutorial: " + JSON.stringify(carbrand, null, 4));
            return carbrand;
        })
        .catch((err) => {
            console.log(">> Error while creating tutorial: ", err);
        });
};

// Create and Save new Comments
exports.createCarModel = (carbrandId, carmodel) => {
    return CarModel.create({
        modelname: carmodel.modelname,
        carbrandId: carbrandId,
    })
        .then((carmodel) => {
            console.log(">> Created comment: " + JSON.stringify(carmodel, null, 4));
            return carmodel;
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
        });
};

// Get the comments for a given tutorial
exports.findCarBrandById = (carbrandId) => {
    return CarBrand.findByPk(carbrandId, { include: ["carmodels"] })
        .then((carbrand) => {
            return carbrand;
        })
        .catch((err) => {
            console.log(">> Error while finding tutorial: ", err);
        });
};

// Get the comments for a given comment id
exports.findCarModelById = (id) => {
    return CarModel.findByPk(id, { include: ["carbrand"] })
        .then((carmodel) => {
            return carmodel;
        })
        .catch((err) => {
            console.log(">> Error while finding comment: ", err);
        });
};

// Get all Tutorials include comments
exports.findAll = () => {
    return CarBrand.findAll({
        include: ["carmodels"],
    }).then((carbrands) => {
        return carbrands;
    });
};