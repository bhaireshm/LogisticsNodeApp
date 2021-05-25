const mongoose = require("mongoose");

const AddressScheema = mongoose.Schema({
  city: {
    type: String,
    required: false,
  },
  cityCode: {
    type: String,
    required: false,
  },
  countryCode: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Countrycodes",
  },
  countyCode: {
    type: String,
    required: false,
  },
  crossStreet: {
    type: String,
    required: false,
  },
  currencyOfParty: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Currencyofpartycodes",
  },
  languageOfTheParty: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Languageofthepartycodes",
  },
  name: {
    type: String,
    required: false,
  },
  pOBoxNumber: {
    type: String,
    required: false,
  },
  postalCode: {
    type: String,
    required: false,
  },
  provinceCode: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  streetAddressOne: {
    type: String,
    required: false,
  },
  streetAddressTwo: {
    type: String,
    required: false,
  },
  streetAddressThree: {
    type: String,
    required: false,
  },
  geographicalCoordinates: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Geographicalcoordinatess",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Addresss", AddressScheema);
