const mongoose = require("mongoose");

const DocumenteffectivedateScheema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Documenteffectivedates", DocumenteffectivedateScheema);