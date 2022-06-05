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
    dateOfManifactory: {
      type: DataTypes.DATEONLY
    },
    engineCapacity: {
      type: DataTypes.FLOAT
    },
    fuelType: {
      type: DataTypes.STRING
    },
    gearboxType: {
      type: DataTypes.STRING
    },
    horsePower: {
      type: DataTypes.INTEGER
    },
    bodyType: {
      type: DataTypes.STRING
    },
    additionalInformation: {
      type: DataTypes.STRING
    },
    comfortExtras: {
      type: DataTypes.STRING
    },
    securityExtras: {
      type: DataTypes.STRING
    },
    otherExtras: {
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
