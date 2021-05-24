/* eslint-disable no-dupe-keys */
const mongoose = require("mongoose");

const TransportinstructionSchema = mongoose.Schema({
  creationDateTime: {
    type: Date,
    default: Date.now,
  },
  documentStatusCode: {
    type: Number,
    required: true,
  },
  documentActionCode: {
    type: Number,
    required: true,
  },
  documentStructureVersion: {
    type: Number,
    required: true,
  },
  lastUpdateDateTime: {
    type: Date,
    required: true,
  },
  revisionNumber: {
    type: Number,
    required: true,
  },
  extension: {
    type: String,
    required: true,
  },
  documentEffectiveDate: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Dateoptionaltimetypes",
  },

  avpList: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Ecom_attributevaluepairlisttypes",
  },

  transportInstructionIdentification: {
    entityIdentification: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Entityidentificationtypes",
    },
    contentOwner: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Partyidentificationtypes",
    },
  },

  transportInstructionFunction: {
    type: String,
    required: true,
  },
  logisticServicesSeller: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  logisticServicesBuyer: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  billTo: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  transportInstructionConsignment: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructionconsignmenttype",
  },
  transportInstructionShipment: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructionshipmenttype",
  },
});

module.exports = mongoose.model(
  "Transportinstruction",
  TransportinstructionSchema
);
