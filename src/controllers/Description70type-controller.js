const CustomResponse = require("../helpers/response");
const Description70type = require("../models/Description70type");

var Description70typeController = {};

Description70typeController.getAllDescription70type = async (req, res) => {
  try {
    const description70types = await Description70type.find();
    res.json(CustomResponse.APISuccessResponse(description70types));
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

Description70typeController.getDescription70typeById = async (req, res) => {
  try {
    const description70type = await Description70type.findById(req.params.id);
    res.json(
      CustomResponse.APISuccessResponse({
        _id: description70type._id,
        id: description70type.id,
        languageCode: description70type.languageCode,
        codeListVersion: description70type.codeListVersion,
        createdAt: description70type.createdAt,
      })
    );
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

Description70typeController.postDescription70type = async (req, res) => {
  try {
    const description70type = new Description70type({
      id: req.body.id,
      languageCode: req.body.languageCode,
      codeListVersion: req.body.codeListVersion,
    });
    const savedDescription70type = await description70type.save();
    res
      .status(200)
      .json(CustomResponse.APISuccessResponse(savedDescription70type));
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

Description70typeController.deleteDescription70typeById = async (req, res) => {
  try {
    const removedDescription70type = await Description70type.remove({
      _id: req.params.id,
    });
    const formattedResponse = CustomResponse.deleteResponseFormat(
      removedDescription70type
    );
    res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

Description70typeController.putDescription70typeById = async (req, res) => {
  try {
    const updatedDescription70type = await Description70type.updateOne(
      { _id: req.params.id },
      {
        $set: {
          id: req.body.id,
          languageCode: req.body.languageCode,
          codeListVersion: req.body.codeListVersion,
        },
      }
    );
    const formattedResponse = CustomResponse.updateResponseFormat(
      updatedDescription70type
    );
    res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

module.exports = Description70typeController;
