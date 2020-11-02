/* eslint-disable node/exports-style */
/* eslint-disable no-console */
/* eslint-disable quotes */
const db = require('../utils/db');
/* const bulk = db.a.initializeOrderedBulkOp() */

const retrieve = require('../utils/retrieve');

exports.setTitles = async (req, res) => {
  try {
    const stored = await retrieve('D:/music');

    if (!stored) {
      return res
        .status(200)
        .json({ status: 'success', message: 'no entries now' });
    }

    return res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getTitles = async (req, res) => {
  console.log('getTitles');
  try {
    const documents = await db.music.find();

    if (documents) {
      console.log(documents);
      res.status(200).send({
        message: 'success',
        data: {
          documents,
        },
      });
    }
  } catch (err) {
    throw new Error('something went wrong');
  }
};
