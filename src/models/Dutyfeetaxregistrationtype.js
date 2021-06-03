const mongoose = require("mongoose");

const DutyfeetaxregistrationtypeScheema = mongoose.Schema({
  dutyFeeTaxRegistrationID: {
    type: mongoose.Types.ObjectId,
    ref: "Identifiertypes",
    required: true,
  },
  dutyFeeTaxTypeCode: {
    type: mongoose.Types.ObjectId,
    ref: "Dutyfeetaxtypecodes",
    required: true,
  },
  dutyFeeTaxAgencyName: {
    type: String,
    required: false,
  },
  dutyFeeTaxDescription: {
    type: mongoose.Types.ObjectId,
    ref: "Description80types",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Dutyfeetaxregistrationtypes",
  DutyfeetaxregistrationtypeScheema
);
