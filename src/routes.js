const router = require('express').Router();
 
const bodyParser = require('body-parser');
 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
 
let messages = [];
 
router.post("/message", async (req, res) => {
    await messages.push({ nickname: req.body.nickname, msg: req.body.msg, img: req.body.img })
 
    try {
        req.io.emit('newMessage', messages);
 
        return res.status(201).send("CREATED.")
    } catch (e) {
        return res.status(500).send("ERROR => " + e)
    }
})

router.get('/messages', res => {
    return res.status(200).send(messages)
});

module.exports = router