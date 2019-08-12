const imageModel = require('../model/userModel'); 

module.exports = {
    async index(req, res) {
        const { filename: image } = req.file;

        const sendImage = await imageModel.create({
            image,
        });

        return res.json(sendImage)
    },
}