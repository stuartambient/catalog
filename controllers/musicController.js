const db = require("../utils/db");
const mongoist = require("mongoist");
const retrieve = require("../utils/retrieve");

exports.getTitles = async (req, res) => {
  try {
    const retrieved = await retrieve("D:/music");
    if (retrieved) {
      res.status(200).json({
        status: "success",
        results: retrieved.length,
        data: {
          retrieved,
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};
