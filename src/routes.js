const express = require('express');
const routes = express.Router();

const userSchema = require("./controller/userController");

routes.post('/', userSchema.index);

module.exports = routes;