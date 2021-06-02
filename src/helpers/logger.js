const chalk = require("chalk");

// Align content in given length
const alignContent = (d, l = 6) => {
  if (d.toString().length > l) return d;
  return d + " ".repeat(l - d.toString().length);
};
exports.alignContent = alignContent;

exports.debug = (content) => {
  console.log(chalk.yellow(alignContent("DEBUG")), content);
};

// eslint-disable-next-line no-unused-vars
exports.logger = (content, color = "yellow") => {
  console.log(chalk.yellow(alignContent("LOG")), content);
};
