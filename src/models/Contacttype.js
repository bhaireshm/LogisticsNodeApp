const mongoose = require("mongoose");

const ContacttypeScheema = mongoose.Schema({
  contactTypeCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contacttypecodes",
    required: true,
  },
  personName: {
    type: String,
    required: false,
  },
  departmentName: {
    type: String,
    required: false,
  },
  jobTitle: {
    type: String,
    required: false,
  },
  responsibility: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Responsibilitys",
    required: true,
  },
  communicationChannel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Communicationchannelcodes",
    required: true,
  },
  afterHoursCommunicationChannel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Communicationchannelcodes",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contacttypes", ContacttypeScheema);
