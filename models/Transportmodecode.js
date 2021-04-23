const mongoose = require("mongoose");

const TransportmodecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportmodecodes", TransportmodecodeScheema);