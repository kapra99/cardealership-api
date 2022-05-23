module.exports = (sequelize, Sequelize) => {
    const CarBrand = sequelize.define("carbrand", {
        brand: {
            type: Sequelize.STRING
        }
    });
    return CarBrand;
};