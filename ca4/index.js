const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname+"/public")));

server.listen(5000);

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  socket.on("newUser", function (username){
    socket.broadcast.emit("update", username + " joined the webchat");
  });

  socket.on("exitUser", function (username){
    socket.broadcast.emit("update", username + " left the webchat");
  });

  socket.on("chat", function (message){
    socket.broadcast.emit("chat", message);
  });

});