const chalk = require("chalk");
const { alignContent } = require("./helper");

exports.debug = (content) => {
  console.log(chalk.yellow(alignContent("DEBUG")), content);
};

exports.logger = (content) => {
  console.log(chalk.yellow(alignContent("LOG")), content);
};

exports.formatResponse = (d, msg, s = true) => {
  return { data: d, status: s, info: msg };
};
