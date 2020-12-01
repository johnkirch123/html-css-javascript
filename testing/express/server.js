const express = require('express');
const { connect } = require('mongoose');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => res.send('Home Page'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});