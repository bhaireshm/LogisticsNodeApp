const Logisticservicesbuyer = require("../models/Logisticservicesbuyer");

var LogisticservicesbuyerController = {};

LogisticservicesbuyerController.getAllLogisticservicesbuyer = async (
  req,
  res
) => {
  try {
    const Logisticservicesbuyers = await Logisticservicesbuyer.find();
    res.json(Logisticservicesbuyers);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

LogisticservicesbuyerController.getLogisticservicesbuyerById = async (
  req,
  res
) => {
  try {
    const logisticservicesbuyer = await Logisticservicesbuyer.findById(
      req.params.id
    );
    res.json({
      _id: logisticservicesbuyer._id,
      gln: logisticservicesbuyer.gln,
      createdAt: logisticservicesbuyer.createdAt,
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

LogisticservicesbuyerController.postLogisticservicesbuyer = async (
  req,
  res
) => {
  try {
    const logisticservicesbuyer = new Logisticservicesbuyer({
      gln: req.body.gln,
    });
    const savedLogisticservicesbuyer = await logisticservicesbuyer.save();
    res.status(200).json(savedLogisticservicesbuyer);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

LogisticservicesbuyerController.deleteLogisticservicesbuyerById = async (
  req,
  res
) => {
  try {
    const removedLogisticservicesbuyer = await Logisticservicesbuyer.remove({
      _id: req.params.id,
    });
    res.json(removedLogisticservicesbuyer);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

LogisticservicesbuyerController.updateLogisticservicesbuyerById = async (
  req,
  res
) => {
  try {
    const updatedLogisticservicesbuyer = await Logisticservicesbuyer.updateOne(
      { _id: req.params.id },
      {
        $set: {
          gln: req.body.gln,
        },
      }
    );
    res.json(updatedLogisticservicesbuyer);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

module.exports = LogisticservicesbuyerController;
