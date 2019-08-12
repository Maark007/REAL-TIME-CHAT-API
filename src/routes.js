const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const userController = require('./controller/userController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/chat', upload.single('image'), userController.index);

module.exports = routes;
