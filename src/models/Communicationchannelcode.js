const mongoose = require("mongoose");

const CommunicationchannelcodeScheema = mongoose.Schema({
  communicationChannelCode: {
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

module.exports = mongoose.model(
  "Communicationchannelcodes",
  CommunicationchannelcodeScheema
);
