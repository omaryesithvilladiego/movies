const express = require('express');
const movieRouter = require("../src/routes/movieRouter");
const morgan = require("morgan");
let cors = require("cors");

const server = express();

let corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:8080'],
  methods: 'GET',
  allowedHeaders: ['Content-Type', 'Authorization'], // Agrega otros headers si es necesario
  credentials: true, // Si necesitas enviar cookies o autenticación
};

server.use(morgan('dev'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(movieRouter);

module.exports = server;
