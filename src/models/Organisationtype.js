const mongoose = require("mongoose");

const OrganisationtypeScheema = mongoose.Schema({
  organisationName: {
    type: String,
    required: false,
  },
  issuedCapital: {
    type: mongoose.Types.ObjectId,
    ref: "Issuedcapitals",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Organisationtypes", OrganisationtypeScheema);
