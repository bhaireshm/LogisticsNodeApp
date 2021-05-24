const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const path = require("path");

const { logger, readAPI, debug } = require("./src/helper/logger");
const mainRoute = require("./src/routes/_main-route");
const mongooseConnect = require("./src/utils/database.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(readAPI);

app.use(express.static(path.join(__dirname, "src/public")));

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
