/* eslint-disable no-dupe-keys */
const mongoose = require("mongoose");

const TransportInstructionShipmentItemTypeSchema = mongoose.Schema({
  lineItemNumber: {
    type: Number,
    required: false,
  },
  parentLineItemNumber: {
    type: Number,
    required: false,
  },
  note: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Description500types",
  },
  transportCargoCharacteristics: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportcargocharacteristicstypes",
  },
  packageTotal: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Packagetotaltypes",
  },
  logisticUnit: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Logisticunittypes",
  },
  referencedTransportEquipment: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportequipmenttypes",
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
  avpList: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Ecom_attributevaluepairlisttypes",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "TransportInstructionShipmentItemType",
  TransportInstructionShipmentItemTypeSchema
);
