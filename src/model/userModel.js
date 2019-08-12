const mongoose = require('mongoose');

const imageModel = new mongoose.Schema({
    image: String,
});

module.exports = mongoose.model('imageModel', imageModel);