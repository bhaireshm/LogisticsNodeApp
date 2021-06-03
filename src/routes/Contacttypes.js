const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Contacttype = require("../models/Contacttype");
const Communicationchannel = require("../models/Communicationchannel");
const Description70type = require("../models/Description70type");
const Contacttypecode = require("../models/Contacttypecode");
const Communicationchanneltype = require("../models/Communicationchanneltype");
const Enumerationlibrary = require("../models/Enumerationlibrary");

router.get("/", verify, async (req, res) => {
  try {
    const Contacttypes = await Contacttype.find();
    res.json(Contacttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const contacttype = await Contacttype.findById(req.params.id);
    res.json({
      _id: contacttype._id,
      contactTypeCode: contacttype.contactTypeCode,
      personName: contacttype.personName,
      departmentName: contacttype.departmentName,
      jobTitle: contacttype.jobTitle,
      responsibility: contacttype.responsibility,
      communicationChannel: contacttype.communicationChannel,
      afterHoursCommunicationChannel:
        contacttype.afterHoursCommunicationChannel,
      communicationChannelId: contacttype.communicationChannel.Id,
      afterHoursCommunicationChannelId:
        contacttype.afterHoursCommunicationChannel.Id,
      responsibilityId: contacttype.responsibility.Id,
      contactTypeCodeId: contacttype.contactTypeCode.Id,
      createdAt: contacttype.createdAt,
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const communicationchannels = await Communicationchannel.findById(
      req.body.communicationChannelId
    );
    const responsibilitys = await Description70type.findById(
      req.body.responsibilityId
    );
    const contacttypecodes = await Contacttypecode.findById(
      req.body.contactTypeCodeId
    );
    const contacttype = new Contacttype({
      personName: req.body.personName,
      departmentName: req.body.departmentName,
      jobTitle: req.body.jobTitle,
      communicationChannelName: req.body.communicationChannelName,
      communicationValue: req.body.communicationValue,
      communicationChannelCode: communicationchannels._id,
      responsibility: responsibilitys._id,
      contactTypeCode: contacttypecodes._id,
    });
    const savedContacttype = await contacttype.save();
    res.status(200).json(savedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedContacttype = await Contacttype.remove({ _id: req.params.id });
    res.json(removedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const communicationchannel = await Communicationchanneltype.findById(
      req.body.communicationChannelId
    );
    const afterHoursCommunicationChannel =
      await Communicationchanneltype.findById(
        req.body.afterHoursCommunicationChannelId
      );
    const responsibility = await Description70type.findById(
      req.body.responsibilityId
    );
    const contacttypecode = await Enumerationlibrary.findById(
      req.body.contactTypeCodeId
    );
    const updatedContacttype = await Contacttype.updateOne(
      { _id: req.params.id },
      {
        $set: {
          contactTypeCode: contacttypecode._id,
          personName: req.body.personName,
          departmentName: req.body.departmentName,
          jobTitle: req.body.jobTitle,
          responsibility: responsibility._id,
          communicationChannel: communicationchannel._id,
          afterHoursCommunicationChannel: afterHoursCommunicationChannel._id,
        },
      }
    );
    res.json(updatedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;
