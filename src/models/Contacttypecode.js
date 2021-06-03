const mongoose = require("mongoose");

const ContacttypecodeScheema = mongoose.Schema({
  contactTypeCode: {
    type: String,
    required: false,
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

module.exports = mongoose.model("Contacttypecodes", ContacttypecodeScheema);
