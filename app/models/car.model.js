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
    bodyType: {
      type: DataTypes.STRING
    },
    horsePower: {
      type: DataTypes.INTEGER
    },
    additionalInformation: {
      type: DataTypes.STRING
    },
    comfortExtras: {
      type: DataTypes.JSON
    },
    securityExtras: {
      type: DataTypes.JSON
    },
    otherExtras: {
      type: DataTypes.JSON
    },
    price: {
      type: DataTypes.INTEGER
    },
    carThumbnail: {
      type: DataTypes.JSON
    },
    carImages: {
      type: DataTypes.JSON
    },
    published: {
      type: DataTypes.BOOLEAN
    }



  },{timestamps:false});

  return Car;
};
