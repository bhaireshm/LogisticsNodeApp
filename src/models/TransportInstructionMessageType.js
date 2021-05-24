const mongoose = require("mongoose");

const TransportInstructionMessageTypeSchema = mongoose.Schema({
  transportInstruction: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Transportinstruction",
  },
  StandardBusinessDocumentHeader: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Standardbusinessdocumentheaders",
  },
});

module.exports = mongoose.model(
  "TransportInstructionMessageType",
  TransportInstructionMessageTypeSchema
);
