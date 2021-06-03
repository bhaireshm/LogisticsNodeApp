const mongoose = require("mongoose");

const CommunicationchanneltypeScheema = mongoose.Schema({
  communicationValue: {
    type: String,
    required: false,
  },
  communicationChannelName: {
    type: String,
    required: false,
  },
  communicationChannelCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Communicationchannelcodes",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Communicationchanneltypes",
  CommunicationchanneltypeScheema
);
