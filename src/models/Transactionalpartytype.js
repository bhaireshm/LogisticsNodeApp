/* eslint-disable no-dupe-keys */
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
  financialInstitutionInformation: {
    type: Number,
    required: false,
  },
  additionalPartyIdentification: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  dutyFeeTaxRegistration: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  financialInstitutionInformation: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  organisationDetails: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  address: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  contact: {
    type: [
      {
        Id: {
          type: String,
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
      },
    ],
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
