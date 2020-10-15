const express = require("express");
const app = express();
const mongoist = require("mongoist");
const musicRouter = require("./routes/musicRoutes");

app.use(express.static("public"));

app.use(
  express.json({
    limit: "10kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/library", musicRouter);

module.exports = app;
