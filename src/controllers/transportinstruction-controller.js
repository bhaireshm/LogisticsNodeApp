const { debug, logger } = require("../helpers/logger");
const Transportinstruction = require("../models/Transportinstruction");

exports.getAllTransportInstructions = async (req, res) => {
  try {
    const transportinstructions = await Transportinstruction.find();
    logger(transportinstructions);
    return res.json(transportinstructions);
  } catch (ex) {
    debug(ex);
    return res.status(400).send(ex);
  }
};

exports.getTransportInstructionById = async (req, res) => {
  try {
    const transportinstruction = await Transportinstruction.findById(
      req.params.id
    );
    return res.json(transportinstruction);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

exports.postTransportInstructions = async (req, res) => {
  try {
    // let reqClone = req;

    // const dateoptionaltimetype = postDateoptionaltimetype({id: req.body.documentEffectiveDate});

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
      documentEffectiveDate: req.body.documentEffectiveDate,

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

exports.deleteTransportInstructionById = async (req, res) => {
  try {
    const removedTransportInstruction = await Transportinstruction.remove({
      _id: req.params.id,
    });
    return res.json(removedTransportInstruction);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

/**
 * Private Functions
 */
// function name() {}
