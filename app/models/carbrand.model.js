const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const CarBrand = sequelize.define("carbrand", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false
    });
    return CarBrand;
};