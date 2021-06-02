const customResponse = require("../helpers/response");
const Logisticservicesbuyer = require("../models/Logisticservicesbuyer");
var LogisticservicesbuyerController = {};

LogisticservicesbuyerController.getAllLogisticservicesbuyer = async (
  req,
  res
) => {
  try {
    const Logisticservicesbuyers = await Logisticservicesbuyer.find();
    res.json(customResponse.APISuccessResponse(Logisticservicesbuyers));
  } catch (ex) {
    res.status(400).json(customResponse.APIErrorResponse(ex, ex.message));
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
    res.json(
      customResponse.APISuccessResponse({
        _id: logisticservicesbuyer._id,
        gln: logisticservicesbuyer.gln,
        createdAt: logisticservicesbuyer.createdAt,
      })
    );
  } catch (ex) {
    res.status(400).json(customResponse.APIErrorResponse(ex, ex.message));
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
    res
      .status(200)
      .json(
        customResponse.APISuccessResponse(
          savedLogisticservicesbuyer,
          "Logistic services buyer saved succesfully."
        )
      );
  } catch (ex) {
    res.status(400).json(customResponse.APIErrorResponse(ex, ex.message));
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
    const formattedResponse = customResponse.deleteResponseFormat(
      removedLogisticservicesbuyer
    );
    res.json(
      customResponse.APISuccessResponse(
        null,
        "Logistic services buyer " + formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json(customResponse.APIErrorResponse(ex, ex.message));
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

    const formattedResponse = customResponse.updateResponseFormat(
      updatedLogisticservicesbuyer
    );
    res.json(
      customResponse.APISuccessResponse(
        null,
        "Logistic services buyer " + formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json(customResponse.APIErrorResponse(ex, ex.message));
  }
};

module.exports = LogisticservicesbuyerController;
