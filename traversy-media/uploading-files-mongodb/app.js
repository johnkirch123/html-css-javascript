const express = require("express");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
