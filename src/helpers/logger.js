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

exports.logger = (content, color = "yellow") => {
  console.log(chalk[color](alignContent("LOG")), content);
};
