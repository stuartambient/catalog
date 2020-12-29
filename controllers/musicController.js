/* eslint-disable arrow-parens */
/* eslint-disable node/exports-style */
/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const db = require('../utils/db');

const wrapAsync = require('../utils/wrapAsync');
const runWorker = require('../threads/main');
/* const bulk = db.a.initializeOrderedBulkOp() */

const parse = require('../utils/parse');
/* const { count } = require('console');
 */
const catchWorkerResult = result => console.log('result: ', result);

exports.setTitles = wrapAsync(async (req, res) => {
  const path = 'D:/books';
  const files = await fs.promises.readdir(path, { withFileTypes: true });
  const returnedArray = await parse.loopFiles(files, path);

  if (returnedArray) {
    runWorker(returnedArray, catchWorkerResult);
    res.status(200).send({
      message: 'success',
      data: returnedArray,
    });
  } else {
    throw new Error('something went wrong....');
  }
});

exports.getTitles = async (req, res) => {
  console.log('getTitles');
  try {
    const documentsCursor = await db.music.findAsCursor().skip(1).limit(10);
    const count = await db.music.runCommand('count');
    const documents = await documentsCursor.toArray();

    if (documents) {
      res.status(200).send({
        message: 'success',
        count,
        documents,
      });
    }
  } catch (err) {
    throw new Error('something went wrong');
  }
};
