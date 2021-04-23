const mongoose = require("mongoose");

const LogisticeventdurationScheema = mongoose.Schema({
  timeMeasurementUnitCode: {
    type: String,
    required: true
  },
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticeventdurations", LogisticeventdurationScheema);