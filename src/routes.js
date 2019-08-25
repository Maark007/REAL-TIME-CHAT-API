const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const userController = require('./controller/userController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/chat', upload.single('image'), userController.index);

router.post("/message/:nickname", async (req, res) => {
    await messages.push({ nickname: req.params.nickname, msg: req.body.msg })
    req.io.emit('newMessage', messages);
});

module.exports = router;
