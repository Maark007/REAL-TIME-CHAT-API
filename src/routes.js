const router = require('express').Router()

const messages = []

router.post("/message", async (req, res) => {
    await messages.push({ nickname: req.body.nickname, msg: req.body.msg, img: req.body.img })
    req.io.emit('newMessage', messages);
})

module.exports = router;