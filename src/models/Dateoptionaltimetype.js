const mongoose = require("mongoose");

const DateoptionaltimetypeScheema = mongoose.Schema({
  date: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Dateoptionaltimetypes",
  DateoptionaltimetypeScheema
);
