const CustomResponse = require("../helpers/response");
const {
  deleteResponseFormat,
  updateResponseFormat,
} = require("../helpers/response");
const Dateoptionaltimetype = require("../models/Dateoptionaltimetype");
const DateoptionaltimetypeService = require("../services/Dateoptionaltimetype-service");

var DateoptionaltimetypesController = {};

DateoptionaltimetypesController.getAllDateoptionaltimetypes = async (
  req,
  res
) => {
  try {
    const dateoptionaltimetypes = await Dateoptionaltimetype.find();
    return res.json(CustomResponse.APISuccessResponse(dateoptionaltimetypes));
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

DateoptionaltimetypesController.getDateoptionaltimetypeById = async (
  req,
  res
) => {
  try {
    const dateoptionaltimetype = await Dateoptionaltimetype.findById(
      req.params.id
    );
    return res.json(
      CustomResponse.APISuccessResponse({
        _id: dateoptionaltimetype._id,
        id: dateoptionaltimetype.id,
        date: dateoptionaltimetype.date,
        time: dateoptionaltimetype.time,
        createdAt: dateoptionaltimetype.createdAt,
      })
    );
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

DateoptionaltimetypesController.postDateoptionaltimetype = async (req, res) => {
  try {
    const savedDateoptionaltimetype =
      await DateoptionaltimetypeService.createDateoptionaltimetype(
        req.body.date,
        req.body.time
      );
    return res
      .status(200)
      .json(CustomResponse.APISuccessResponse(savedDateoptionaltimetype));
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

DateoptionaltimetypesController.deleteDateoptionaltimetypeById = async (
  req,
  res
) => {
  try {
    const removedDateoptionaltimetype = await Dateoptionaltimetype.deleteOne({
      _id: req.params.id,
    });
    const formattedResponse = deleteResponseFormat(removedDateoptionaltimetype);
    return res.json(
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

DateoptionaltimetypesController.putDateoptionaltimetype = async (req, res) => {
  try {
    const updatedDateoptionaltimetype =
      await DateoptionaltimetypeService.updateDateoptionaltimetype(
        req.params.id,
        req.body.date,
        req.body.time
      );
    const formattedResponse = updateResponseFormat(updatedDateoptionaltimetype);
    return res.json(
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

module.exports = DateoptionaltimetypesController;
