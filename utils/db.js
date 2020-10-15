const mongoist = require("mongoist");
const dotenv = require("dotenv").config();

const uri = process.env.DATABASE;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = mongoist(uri, options);
