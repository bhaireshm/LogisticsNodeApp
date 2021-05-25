const mongoose = require("mongoose");
const config = require("../../config");
const { logger, debug } = require("../helpers/logger");
const createService = require("../services/sampleRecord");

//YOUR DATABASE WITH A SAMPLE RECORD
function mongooseConnect() {
  return mongoose
    .connect(config.DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      mongoose.set("useFindAndModify", false);
      logger("Connected to MongoDB.");

      // Sample user creation
      let createServiceObj = null;
      createServiceObj = createService.getInstance();
      createServiceObj.createSampleUser();
    })
    .catch((err) => {
      debug("Failed to connected to DB Error: " + err.message);
    });
}

module.exports = mongooseConnect;
