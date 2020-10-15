const db = require("../utils/db");
/* const bulk = db.a.initializeOrderedBulkOp() */
const mongoist = require("mongoist");
const retrieve = require("../utils/retrieve");

exports.getTitles = async (req, res) => {
  try {
    const retrieved = await retrieve("D:/music");
    if (retrieved.length > 0) {
      await db.music.insert(
        retrieved,
        { writeConcern: retrieved, ordered: true },
        (error, inserted) => {
          if (error) {
            console.error(error);
          } else {
            res.status(200).json({
              status: "success",
            });
          }
        }
      );
    }
  } catch (err) {
    console.error(err);
  }
};
