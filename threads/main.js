/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable arrow-body-style */
const { Worker } = require('worker_threads');

const path = `${__dirname}/worker.js`;
// eslint-disable-next-line arrow-parens

const runService = workerData => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      console.log('exit code: ', code);
      if (code !== 0) {
        reject(new Error(`Stopped the thread with exit code ${code}`));
      }
    });
  });
};

const run = async data => {
  const result = await runService(data);
  return result;
};

const runWorker = (data, cb) =>
  run(data)
    .then(value => cb(value))
    .catch(err => cb(err.message));

module.exports = runWorker;
