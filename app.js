const express = require("express");
const APP_SERVER = express();

APP_SERVER.use("/files", require("./Controllers/Files.controller"));

module.exports = APP_SERVER;
