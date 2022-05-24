const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const CarBrand = sequelize.define("carbrand", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false
    });
    return CarBrand;
};