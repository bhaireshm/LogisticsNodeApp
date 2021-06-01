const {
  deleteResponseFormat,
  updateResponseFormat,
} = require("../helpers/response");
const Dateoptionaltimetype = require("../models/Dateoptionaltimetype");
const {
  createDateoptionaltimetype,
  updateDateoptionaltimetype,
} = require("../services/Dateoptionaltimetype-service");

var DateoptionaltimetypesController = {};

DateoptionaltimetypesController.getAllDateoptionaltimetypes = async (
  req,
  res
) => {
  try {
    const dateoptionaltimetypes = await Dateoptionaltimetype.find();
    return res.json(dateoptionaltimetypes);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
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
    return res.json({
      _id: dateoptionaltimetype._id,
      id: dateoptionaltimetype.id,
      date: dateoptionaltimetype.date,
      time: dateoptionaltimetype.time,
      createdAt: dateoptionaltimetype.createdAt,
    });
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

DateoptionaltimetypesController.postDateoptionaltimetype = async (req, res) => {
  try {
    const savedDateoptionaltimetype = await createDateoptionaltimetype(
      req.body.date,
      req.body.time
    );
    return res.status(200).json(savedDateoptionaltimetype);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
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
    return res.json(deleteResponseFormat(removedDateoptionaltimetype));
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

DateoptionaltimetypesController.putDateoptionaltimetype = async (req, res) => {
  try {
    const updatedDateoptionaltimetype = await updateDateoptionaltimetype(
      req.params.id,
      req.body.date,
      req.body.time
    );
    return res.json(updateResponseFormat(updatedDateoptionaltimetype));
    // return res.json(updatedDateoptionaltimetype);
  } catch (ex) {
    return res.status(400).json({ message: ex.message });
  }
};

module.exports = DateoptionaltimetypesController;