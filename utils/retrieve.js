/* eslint-disable arrow-parens */
const fs = require('fs');
const db = require('./db');

const parseFolderName = (name, ...rest) => ({
  artist: name,
  title: rest.join('').replace(',', ''),
});

const retrieve = async path => {
  /* const folders = []; */
  try {
    const dir = await fs.promises.opendir(path);
    // eslint-disable-next-line no-restricted-syntax
    for await (const dirent of dir) {
      const name = dirent.name.split('-');
      const [artist, ...title] = name;
      /* folders.push(parseFolderName(artist, title)); */
      try {
        await db.music.insert(parseFolderName(artist, title));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    }
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    return console.log(err.message);
  }
};
module.exports = retrieve;
