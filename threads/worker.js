/* eslint-disable no-console */
/* eslint-disable arrow-parens */
const { workerData, parentPort } = require('worker_threads');
const db = require('../utils/db');

// eslint-disable-next-line no-shadow
const handleInsert = async workerData => {
  /* const insert =  */ await db.books
    .insert(workerData)
    .then(response => console.log('response: ', response))
    .catch(e => console.log(e.message));
  /* if (insert) console.log('inserted: ', insert); */
};

handleInsert(workerData);

parentPort.postMessage({ fileName: workerData, status: 'Done' });
parentPort.postMessage('exit');
