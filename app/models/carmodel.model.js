const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const CarModel = sequelize.define("carmodel", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        modelname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    });
    return CarModel;
};