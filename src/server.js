const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://mark:mark123@ds021356.mlab.com:21356/whatschat', {
    useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());
app.use(router);

app.use((req, res, next) => {
    req.io = io;
    return next();
});

io.on('connection', socket => {
    console.log(`Usuario conectado: ${socket.id}`);
});

server.listen(process.env.PORT || 3333, () => {
    console.log("Server ON :)")
});

