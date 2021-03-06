const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://Maark:marcos062@cluster0-o1a2q.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(router);

io.on('connection', socket => {
    console.log(`Usuario conectado: ${socket.id}`);
});

server.listen(process.env.PORT || 3333, () => {
    console.log("Server ON :)")
});

