const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticlocationtype = require("../models/Logisticlocationtype");
const Operatinghourstype= require("../models/Operatinghourstype");
const Specialoperatinghourstype= require("../models/Specialoperatinghourstype");
const Countrycode = require("../models/Countrycode");
const Currencyofpartycode = require("../models/Currencyofpartycode");
const Languageofthepartycode = require("../models/Languageofthepartycode");
const Contacttype = require("../models/Contacttype");
const Description200type = require("../models/Description200type");
const Identifiertype = require("../models/Identifiertype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticlocationtypes = await Logisticlocationtype.find();
    res.json(Logisticlocationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticlocationtype = await Logisticlocationtype.findById(req.params.id);
    let logisticcontacttypes;
    if(logisticlocationtype){
      logisticcontacttypes = await Contacttype.findById(logisticlocationtype.contact)
    }
    res.json({
        _id: logisticlocationtype._id,
        unLocationCode: logisticlocationtype.unLocationCode,
        sublocationIdentification: logisticlocationtype.sublocationIdentification,
        locationName: logisticlocationtype.locationName,
        utcOffset: logisticlocationtype.utcOffset,
        contact: logisticcontacttypes,
        cityCode: logisticlocationtype.cityCode,

        locationSpecificInstructions: {
          Id: logisticlocationtype.locationSpecificInstructions.Id,
          Name: logisticlocationtype.locationSpecificInstructions.Name
        },
        additionalLocationIdentification: {
          Id: logisticlocationtype.additionalLocationIdentification.Id,
          Name: logisticlocationtype.additionalLocationIdentification.Name
        },
        countryCode: {
          Id: logisticlocationtype.countryCode.Id,
          Name: logisticlocationtype.countryCode.Name
        },
        currencyOfParty: {
          Id: logisticlocationtype.currencyOfParty.Id,
          Name: logisticlocationtype.currencyOfParty.Name
        },
        languageOfTheParty: {
          Id: logisticlocationtype.languageOfTheParty.Id,
          Name: logisticlocationtype.languageOfTheParty.Name
        },
        countyCode: logisticlocationtype.countyCode,
        crossStreet: logisticlocationtype.crossStreet,
        name: logisticlocationtype.name,
        pOBoxNumber: logisticlocationtype.pOBoxNumber,
        postalCode: logisticlocationtype.postalCode,
        provinceCode: logisticlocationtype.provinceCode,
        state: logisticlocationtype.state,
        streetAddressOne: logisticlocationtype.streetAddressOne,
        streetAddressTwo: logisticlocationtype.streetAddressTwo,
        streetAddressThree: logisticlocationtype.streetAddressThree,
        latitude: logisticlocationtype.latitude,
        longitude: logisticlocationtype.longitude,
        createdAt: logisticlocationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const locationspecificinstructionss = await Description200type.findById(req.body.locationSpecificInstructionsId);
    const additionallocationidentifications = await Identifiertype.findById(req.body.additionalLocationIdentificationId);
    const countrycodes = await Countrycode.findById(req.body.countryCodeId);
    const currencyofpartycodes = await Currencyofpartycode.findById(req.body.currencyOfPartyCodeId);
    const languageofthepartycodes = await Languageofthepartycode.findById(req.body.languageOfThePartyCodeId);
    const contacttypes = await Contacttype.findById(req.body.contactId);
    const logisticlocationtype = new Logisticlocationtype ({
        unLocationCode: req.body.unLocationCode,
        sublocationIdentification: req.body.sublocationIdentification,
        locationName: req.body.locationName,
        utcOffset: req.body.utcOffset,
        locationSpecificInstructions: {
          Id: locationspecificinstructionss._id,
          Name: locationspecificinstructionss.codeListVersion
        },
        additionalLocationIdentification: {
          Id: additionallocationidentifications._id,
          Name: additionallocationidentifications.identificationSchemeName
        },

        contact: contacttypes._id,
        cityCode: req.body.cityCode,
        countryCode: {
          Id: countrycodes._id,
          Name: countrycodes.codeListVersion
        },
        currencyOfParty: {
          Id: currencyofpartycodes._id,
          Name: currencyofpartycodes.codeListVersion
        },
        languageOfTheParty: {
          Id: languageofthepartycodes._id,
          Name: languageofthepartycodes.codeListVersion
        },
        countyCode: req.body.countyCode,
        crossStreet: req.body.crossStreet,
        name: req.body.name,
        pOBoxNumber: req.body.pOBoxNumber,
        postalCode: req.body.postalCode,
        provinceCode: req.body.provinceCode,
        state: req.body.state,
        streetAddressOne: req.body.streetAddressOne,
        streetAddressTwo: req.body.streetAddressTwo,
        streetAddressThree: req.body.streetAddressThree,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    const savedLogisticlocationtype = await logisticlocationtype.save();
    res.status(200).json(savedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticlocationtype = await Logisticlocationtype.remove({ _id: req.params.id });
    res.json(removedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const locationspecificinstructions = await Description200type.findById(req.body.locationSpecificInstructionsId);
    const additionallocationidentification = await Identifiertype.findById(req.body.additionalLocationIdentificationId);
    const regularoperatinghours = await Operatinghourstype.findById(req.body.regularOperatingHoursId);
    const specialoperatinghours = await Specialoperatinghourstype.findById(req.body.specialOperatingHoursId);
    const address = await Address.findById(req.body.addressId);
    const contact = await Contacttype.findById(req.body.contactId);
    const unlocationcode = await Enumerationlibrary.findById(req.body.unLocationCodeId);
    const updatedLogisticlocationtype = await Logisticlocationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             unLocationCode: req.body.unLocationCode,
             gln: req.body.gln,
             additionalLocationIdentification: req.body.additionalLocationIdentification,
             sublocationIdentification: req.body.sublocationIdentification,
             locationName: req.body.locationName,
             locationSpecificInstructions: req.body.locationSpecificInstructions,
             utcOffset: req.body.utcOffset,
             address: req.body.address,
             contact: req.body.contact,
             regularOperatingHours: req.body.regularOperatingHours,
             specialOperatingHours: req.body.specialOperatingHours,
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },

        }
      }
    );
    res.json(updatedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;