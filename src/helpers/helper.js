const { logger } = require("./logger");

exports.requireProcessEnv = (name) => {
  if (!process.env[name]) {
    logger("You must set the " + name + " environment variable", "red");
  }
  return process.env[name];
};

exports.getRandomNumber = () => {
  return +Math.floor(10000000000000 + Math.random() * 987654321000)
    .toString()
    .substr(0, 13);
};

exports.apiNotFound = (res) => (entity) => {
  if (entity) {
    return entity;
  }
  res.status(404).end();
  return null;
};
