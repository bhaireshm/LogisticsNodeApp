const chalk = require("chalk");

const alignContent = (d, l = 6) => {
  if (d.toString().length > l) return d;
  return d + " ".repeat(l - d.toString().length);
};

// This method will trigger for every API call
exports.readAPI = (req, res, next) => {
  console.log(
    `${chalk.green(alignContent(req.method))} ${chalk.green(res.statusCode)} ${
      req.url
    }`
  );
  next();
};

exports.debug = (content) => {
  console.log(chalk.yellow(alignContent("DEBUG")), content);
};

exports.logger = (content) => {
  console.log(chalk.yellow(alignContent("LOG")), content);
};

exports.formatResponse = (d, msg, s = true) => {
  return { data: d, status: s, info: msg };
};
