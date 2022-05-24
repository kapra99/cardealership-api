// const express = require("express");
// const cors = require("cors");
//
// const app = express();
//
// var corsOptions = {
//     origin: "http://localhost:8081"
// };
//
// app.use(cors(corsOptions));
//
// // parse requests of content-type - application/json
// app.use(express.json());
//
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
//
// const db = require("./app/models");
//
// db.sequelize.sync();
// // // drop the table if it already exists
// // db.sequelize.sync({ force: true }).then(() => {
// //   console.log("Drop and re-sync db.");
// // });
//
// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to kapra99 application." });
// });
//
// // require("./app/routes/carbrand.routes")(app);
//
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });

const db = require("./app/models");
const controller = require("./app/controllers/car.controller");

const run = async () => {
    const carbrand1 = await controller.createCarBrand({
        brand: "Opel",
    });

    const carbrand2 = await controller.createCarBrand({
        brand: "Lada",
    });

    const carmodel1 = await controller.createCarModel(carbrand1.id, {
        modelname: "Vectra"
    });

    await controller.createCarModel(carbrand1.id, {
        modelname: "Astra",
    });

    const carmodel2 = await controller.createCarModel(carbrand2.id, {
        modelname: "Niva",
    });

    await controller.createCarModel(carbrand2.id, {
        modelname: "Vesta",
    });

    const carbrand1Data = await controller.findCarBrandById(carbrand1.id);
    console.log(
        ">> Tutorial id=" + carbrand1Data.id,
        JSON.stringify(carbrand1Data, null, 2)
    );

    const carbrand2Data = await controller.findCarBrandById(carbrand2.id);
    console.log(
        ">> Tutorial id=" + carbrand2Data.id,
        JSON.stringify(carbrand2Data, null, 2)
    );

    const carmodel1Data = await controller.findCarModelById(carmodel1.id);
    console.log(
        ">> Comment id=" + carmodel1.id,
        JSON.stringify(carmodel1Data, null, 2)
    );

    const carmodel2Data = await controller.findCarModelById(carmodel2.id);
    console.log(
        ">> Comment id=" + carmodel2.id,
        JSON.stringify(carmodel2Data, null, 2)
    );

    const carbrands = await controller.findAll();
    console.log(">> All tutorials", JSON.stringify(carbrands, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});