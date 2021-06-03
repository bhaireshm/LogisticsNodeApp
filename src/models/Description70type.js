const mongoose = require("mongoose");

const Description70typeScheema = mongoose.Schema({
  languageCode: {
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

module.exports = mongoose.model("Description70types", Description70typeScheema);
