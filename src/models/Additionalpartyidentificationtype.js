const mongoose = require("mongoose");

const AdditionalpartyidentificationtypeScheema = mongoose.Schema({
  additionalPartyIdentificationTypeCode: {
    type: String,
    required: false,
  },
  codeListVersion: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Additionalpartyidentificationtypes",
  AdditionalpartyidentificationtypeScheema
);
