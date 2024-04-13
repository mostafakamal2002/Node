const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/mostafa30", function (req, res) {
  res.send("Hacked By Mostafa");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
