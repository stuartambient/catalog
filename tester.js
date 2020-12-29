/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
const child = require('child_process');

function getDrives() {
  return new Promise((resolve, reject) => {
    child.exec('wmic logicaldisk get name', (error, stdout) => {
      if (error) reject(error);
      resolve(
        stdout
          .split('\r\r\n')
          .filter(value => /[A-Za-z]:/.test(value))
          .map(value => value.trim())
      );
    });
  });
}

const init = getDrives();
init.then(results => console.log('results: ', results));
