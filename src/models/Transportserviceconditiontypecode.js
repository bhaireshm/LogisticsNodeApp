const mongoose = require("mongoose");

const TransportserviceconditiontypecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportserviceconditiontypecodes", TransportserviceconditiontypecodeScheema);