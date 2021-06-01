const { debug, logger } = require("../helpers/logger");
const Transportinstruction = require("../models/Transportinstruction");
const {
  createDateoptionaltimetype,
} = require("../services/Dateoptionaltimetype-service");
var TransportinstructionController = {};

TransportinstructionController.getAllTransportInstructions = async (
  req,
  res
) => {
  try {
    const transportinstructions = await Transportinstruction.find();
    logger(transportinstructions);
    return res.json(transportinstructions);
  } catch (ex) {
    debug(ex);
    return res.status(400).send(ex);
  }
};

TransportinstructionController.getTransportInstructionById = async (
  req,
  res
) => {
  try {
    const transportinstruction = await Transportinstruction.findById(
      req.params.id
    );
    return res.json(transportinstruction);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

TransportinstructionController.postTransportInstructions = async (req, res) => {
  try {
    const dateoptionaltimetype = await createDateoptionaltimetype(
      req.body.documentEffectiveDate,
      req.body.documentEffectiveTime
    );

    const transportinstruction = await new Transportinstruction({
      creationDateTime: req.body.creationDateTime,
      documentStatusCode: req.body.documentStatusCode,
      documentActionCode: req.body.documentActionCode,
      documentStructureVersion: req.body.documentStructureVersion,
      lastUpdateDateTime: req.body.lastUpdateDateTime,
      revisionNumber: req.body.revisionNumber,
      extension: req.body.extension,
      transportInstructionFunction: req.body.transportInstructionFunction,

      // different tables
      documentEffectiveDate: dateoptionaltimetype._id,
      avpList: req.body.avpList,

      transportInstructionIdentification: {
        entityIdentification: req.body.entityIdentification,
        contentOwner: req.body.contentOwner,
      },
      logisticServicesSeller: req.body.logisticServicesSeller,
      logisticServicesBuyer: req.body.logisticServicesBuyer,
      billTo: req.body.billTo,
      transportInstructionConsignment: req.body.transportInstructionConsignment,
      transportInstructionShipment: req.body.transportInstructionShipment,
    });
    return res.json(transportinstruction);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

TransportinstructionController.deleteTransportInstructionById = async (
  req,
  res
) => {
  try {
    const removedTransportInstruction = await Transportinstruction.remove({
      _id: req.params.id,
    });
    return res.json(removedTransportInstruction);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

module.exports = TransportinstructionController;
