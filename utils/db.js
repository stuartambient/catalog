const dotenv = require("dotenv");
dotenv.config({ path: "../../config.env" });
const mongoist = require("mongoist");

const uri = process.env.DATABASE;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = mongoist(uri, options);
