const mongoose = require("mongoose");

const TransactionalpartytypeScheema = mongoose.Schema({
  gln: {
    type: Number,
    required: true,
    validate: /\d{13}/,
  },
  address: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Addresstype",
  },
  contact: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Contacttypes",
  },
  dutyFeeTaxRegistration: {
    type: Number,
    required: false,
  },
  organisationDetails: {
    type: Number,
    required: false,
  },
  additionalPartyIdentification: {
    type: mongoose.Types.ObjectId,
    ref: "Additionalpartyidentificationtypes",
    required: true,
  },
  dutyFeeTaxRegistration: {
    type: mongoose.Types.ObjectId,
    ref: "Dutyfeetaxregistrationtypes",
    required: true,
  },
  financialInstitutionInformation: {
    type: mongoose.Types.ObjectId,
    ref: "Financialinstitutioninformationtypes",
    required: true,
  },
  organisationDetails: {
    type: mongoose.Types.ObjectId,
    ref: "Organisationdetailss",
    required: true,
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Addresss",
    required: true,
  },
  contact: {
    type: mongoose.Types.ObjectId,
    ref: "Contacttypes",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Transactionalpartytypes",
  TransactionalpartytypeScheema
);
