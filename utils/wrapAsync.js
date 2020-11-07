// eslint-disable-next-line arrow-parens
module.exports = fn => (req, res, next) => {
  fn(req, res, next).catch(next);
};
