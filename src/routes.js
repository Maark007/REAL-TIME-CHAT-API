const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const userController = require('./controller/userController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/chat', upload.single('image'), userController.index);

router.post("/message/:nickname", async (req, res) => {
    const sendBack = `message '${req.body.msg}' as been sended by '${req.params.nickname}'`
    await messages.push({ portrait: req.body.portrait, nickname: req.params.nickname, msg: req.body.msg, date: req.body.date })
    res.status(201).send(sendBack)
    req.io.emit('newMessage', messages);
})

module.exports = router;
