var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var request = require("request");
var async = require("async");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.get("/", function(req, res) {});

var port = Number(process.env.PORT || 3000);
app.listen(port);
