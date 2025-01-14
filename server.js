const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = (req, res) => {
  app(req, res); // Use the Express app for Vercel
};