const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        dateofmanifactory: {
            type: DataTypes.DATEONLY
        },
        engineapacity: {
            type: DataTypes.INTEGER
        },
        numberofcylinders: {
            type: DataTypes.INTEGER
        },
        enginetype: {
            type: DataTypes.STRING
        },
        fueltype: {
            type: DataTypes.STRING
        },
        additionalinformation: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps:false
        });
    return Car;
};