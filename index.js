const express = require("express");
const dotenv = require("dotenv");
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});
app.set('io', io);
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on('disconnect', () => {
    console.log("Client disconnected:", socket.id);
  });
  socket.on('contractUpdated', (data) => {
    io.emit('contractUpdated', data);
  });
});

app.use('/api', require('./Router/Contracts.Route'));
  
server.listen(1234, () => {
  console.log(`Server is running on port http://localhost:1234`);
});
