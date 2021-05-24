/* eslint-disable no-dupe-keys */
const mongoose = require("mongoose");

const TransportinstructionconsignmenttypeSchema = mongoose.Schema({
  ginc: {
    type: Number,
    required: true,
    validate: /[-!"%&'()*+,./0-9:;<=>?A-Z_a-z]{4,30}/,
  },
  additionalConsignmentIdentification: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Additionalconsignmentidentificationtypes",
  },

  parentConsignmentID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Consignmentidentificationtypes",
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

  consignor: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  consignee: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  notifyParty: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  pickUpParty: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  dropOffParty: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  exportAgent: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  importAgent: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transactionalpartytypes",
  },
  importAgent: {
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
  plannedPickUp: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Logisticeventtypes",
  },
  plannedDropOff: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Logisticeventtypes",
  },
  transportInstructionTransportMovement: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructiontransportmovementtypes",
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
  containedShipmentReference: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Shipmentidentificationtypes",
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
  includedTransportMeans: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportmeanstypes",
  },
  includedTransportEquipment: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructiontransportequipmenttypes",
  },
  passengerInformation: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Passengerinformationtypes",
  },
  transportInstructionConsignmentItem: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstructionconsignmentitemtypes",
  },
});

module.exports = mongoose.model(
  "Transportinstructionconsignmenttype",
  TransportinstructionconsignmenttypeSchema
);
