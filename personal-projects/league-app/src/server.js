const express = require("express"),
  app = express(),
  ejs = require("ejs"),
  request = require("request");
mongoose = require("mongoose");

app.use(express.static("public"));
app.set("view engine", "ejs");

const API_KEY = "";
const ACCOUNT_ID = "223438398";
const ROOT_URL = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/dubskiski?api_key=${API_KEY}`;
const MATCH_URL = `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${ACCOUNT_ID}?api_key=${API_KEY}`;

app.get("/", function(req, res) {
  request(ROOT_URL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render("champion", { data });
    } else {
      console.log(error);
    }
  });
});

const port = Number(process.env.PORT || 3000);
app.listen(port);
