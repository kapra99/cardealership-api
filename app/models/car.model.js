const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
    id: {
      type:DataTypes.INTEGER,
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
      type: DataTypes.FLOAT
    },
    fueltype: {
      type: DataTypes.STRING
    },
    gearboxtype: {
      type: DataTypes.STRING
    },
    horsepower: {
      type: DataTypes.INTEGER
    },
    bodytype: {
      type: DataTypes.STRING
    },
    additionalinformation: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    carThumbnail: {
      type: DataTypes.STRING
    },
    carImages: {
      type: DataTypes.STRING
    }

  },{timestamps:false});

  return Car;
};
