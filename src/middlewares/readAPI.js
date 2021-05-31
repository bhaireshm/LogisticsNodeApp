// This method will trigger for every API call
const chalk = require("chalk");
const { alignContent } = require("../helpers/logger");

const readEveryAPI = (req, res, next) => {
    console.log(
      `${chalk.green(alignContent(req.method))} ` +
        `${chalk.green(res.statusCode)} ` +
        `${chalk.green(`[${req.ip}]`)} ` +
        `${req.url}`
    );
    next();
  };

module.exports = readEveryAPI;
