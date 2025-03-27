const express = require("express");
const dotenv = require("dotenv");
const http = require('http');
dotenv.config();
const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use('/', require('./Router/Contracts.Route'));
  
server.listen(1234, () => {
  console.log(`Server is running on port http://localhost:1234`);
});
