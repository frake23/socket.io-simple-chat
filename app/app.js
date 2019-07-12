const socketio = require("socket.io");
const express = require("express");

const io = socketio(8801);
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile("index.html", "../static");
})

app.listen(8800);

io.on("connection", socket => {
    console.log(socket.id);
    socket.on("message", (obj) => {
        io.sockets.emit("message", obj)
    })
})