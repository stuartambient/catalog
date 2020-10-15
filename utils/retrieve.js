const fs = require("fs");
const db = require("./db");

const parseFolderName = (name, ...rest) => {
  return {
    artist: name,
    title: rest.join("").replace(",", " "),
  };
};

const retrieve = async path => {
  const folders = [];
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    let name = dirent.name.split("-");
    const [artist, ...title] = name;
    folders.push(parseFolderName(artist, title));
  }
  return folders;
};

module.exports = retrieve;
