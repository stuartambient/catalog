/* eslint-disable arrow-parens */
const init = {
  addProps: (data, path, name) => {
    const newProps = { path: `${path}/${name}`, createdAt: new Date() };
    return { ...data, ...newProps };
  },
  parseFolderName: (name, ...rest) => ({
    artist: name.trim(),
    title: rest.join('').replace(',', '').trim(),
  }),
  loopFiles: async (files, path) => {
    const fileArray = [];
    files.forEach(dirent => {
      const name = dirent.name.split('-');
      const [artist, ...title] = name;
      const data = init.parseFolderName(artist, title);
      const dbObject = init.addProps(data, path, dirent.name);
      fileArray.push(dbObject);
    });

    return fileArray;
  },
};

module.exports = init;
