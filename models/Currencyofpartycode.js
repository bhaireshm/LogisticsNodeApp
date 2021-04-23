const mongoose = require("mongoose");

const CurrencyofpartycodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Currencyofpartycodes", CurrencyofpartycodeScheema);