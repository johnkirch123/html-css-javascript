const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("You have reached the homepage"));

const port = process.env.PORT || 4080;

app.listen(port, () => console.log(`Server running on port ${port}`));
