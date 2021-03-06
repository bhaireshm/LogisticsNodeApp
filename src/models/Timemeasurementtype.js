const mongoose = require("mongoose");

const TimemeasurementtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  timeMeasurementUnitCode: {
    type: String,
    required: false
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

module.exports = mongoose.model("Timemeasurementtypes", TimemeasurementtypeScheema);