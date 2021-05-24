/* eslint-disable no-dupe-keys */
const mongoose = require("mongoose");

const TransportinstructionshipmenttypeSchema = mongoose.Schema({
  gsin: {
    type: Number,
    required: true,
    validate: /\d{17}/,
  },
  additionalShipmentIdentification: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Additionalshipmentidentificationtypes",
  },

  parentShipmentID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Shipmentidentificationtypes",
  },
  transportInstructionStatusCode: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "transportInstructionStatusEnumerationType",
  },
  transportInstructionStatusDescription: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Description70types",
  },
  transportInstructionStatusReasonCode: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  transportInstructionStatusReasonDescription: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Description70types",
  },
  note: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Description500types",
  },

  receiver: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  shipper: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  carrier: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  notifyParty: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  shipTo: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  shipFrom: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  importAgent: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  exportAgent: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  transportInstructionTerms: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructiontermstypes",
  },
  transportCargoCharacteristics: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportcargocharacteristicstypes",
  },
  plannedDelivery: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Logisticeventtypes",
  },
  plannedDespatch: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Logisticeventtypes",
  },
  deliveryTerms: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Deliverytermstypes",
  },
  packageTotal: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Packagetotaltypes",
  },
  transportReference: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportreferencetypes",
  },
  handlingInstruction: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Handlinginstructiontypes",
  },
  dangerousGoodsInformation: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Dangerousgoodsinformationtypes",
  },
  transportInstructionShipmentItem: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructionshipmentitemtype",
  },
});

module.exports = mongoose.model(
  "transportinstructionshipmenttype",
  TransportinstructionshipmenttypeSchema
);
