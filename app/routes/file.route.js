module.exports = app => {
    const file = require("../controllers/file.controller.js");
    var router = require("express").Router();
    router.post("/upload", file.upload);
    router.get("/files", file.getListFiles);
    router.get("/files/:name", file.download);
    app.use('/api/files', router);
};