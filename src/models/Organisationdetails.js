const mongoose = require("mongoose");

const OrganisationdetailsScheema = mongoose.Schema({
  organisationName: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Organisationdetailss", OrganisationdetailsScheema);