const userSchema = require('../model/userModel');

module.exports = {
    async index(req, res) {
         const register = new userSchema(req.body);

         const response = await register.save();

         response.send('Usuario cadastrado!')
    },
}