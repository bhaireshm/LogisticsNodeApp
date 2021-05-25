const mongoose = require("mongoose");

const TransportinstructionstatusenumerationtypeSchema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Transportinstructionstatusenumerationtype",
  TransportinstructionstatusenumerationtypeSchema
);
