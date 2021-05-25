const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const config = require("./config.js");
const mainRoute = require("./src/routes/_main-route");
const mongooseConnect = require("./src/utils/database.js");
const readEveryAPI = require("./src/middlewares/readAPI.js");
const { logger, debug } = require("./src/helpers/logger.js");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src/public")));
app.use(readEveryAPI);

// API ENDPOINTS
app.use(mainRoute);

// DATABASE WITH A SAMPLE RECORD
// AND START THE APP SERVER
mongooseConnect()
  .then((res) => {
    if (res) logger(res);
    app.listen(config.PORT, () => logger("Listening on port " + config.PORT));
  })
  .catch((err) => {
    debug(err);
  });
