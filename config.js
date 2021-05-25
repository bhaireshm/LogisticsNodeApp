const dotenv = require("dotenv");
dotenv.config();
const db_ip = process.env.DB_IP;
const db_port = process.env.DB_PORT;

const DB = {
  local: {
    url: "mongodb://localhost:27017/LogisticsDb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J",
  },
  server: {
    url: `mongodb://${db_ip}:${db_port}/logisticsdb`,
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J",
  },
};

var config = {
  DB_CONNECTION: DB.server.url,
  TOKKEN_SECRET: DB.server.key,
  PORT: 5000,
};

module.exports = config;
