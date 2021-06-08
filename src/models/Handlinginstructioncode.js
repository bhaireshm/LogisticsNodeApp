const mongoose = require("mongoose");

const HandlinginstructioncodeScheema = mongoose.Schema({
  handlingInstructionCode: {
    type: String,
    required: true,
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
  "Handlinginstructioncodes",
  HandlinginstructioncodeScheema
);
