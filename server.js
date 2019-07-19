const express = require('express');

const projects_router = require('./routers/project-router')

const server = express();

server.use(express.json());
server.use('/api/projects', projects_router)

module.exports = server;