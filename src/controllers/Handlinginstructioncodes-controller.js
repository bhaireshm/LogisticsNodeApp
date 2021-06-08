const CustomResponse = require("../helpers/response");
const Handlinginstructioncode = require("../models/Handlinginstructioncode");

var HandlinginstructioncodesController = {};

HandlinginstructioncodesController.getAllHandlinginstructioncodes = async (
  req,
  res
) => {
  try {
    const handlinginstructioncodes = await Handlinginstructioncode.find();
    res.json(handlinginstructioncodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

HandlinginstructioncodesController.getHandlinginstructioncodesById = async (
  req,
  res
) => {
  try {
    const handlinginstructioncode = await Handlinginstructioncode.findById(
      req.params.id
    );
    res.json({
      _id: handlinginstructioncode._id,
      codeListVersion: handlinginstructioncode.codeListVersion,
      createdAt: handlinginstructioncode.createdAt,
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

HandlinginstructioncodesController.postHandlinginstructioncodes = async (
  req,
  res
) => {
  try {
    const handlinginstructioncode = new Handlinginstructioncode({
      codeListVersion: req.body.codeListVersion,
    });
    const savedHandlinginstructioncode = await handlinginstructioncode.save();
    res.status(200).json(savedHandlinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

HandlinginstructioncodesController.deleteHandlinginstructioncodesById = async (
  req,
  res
) => {
  try {
    const removedHandlinginstructioncode = await Handlinginstructioncode.remove(
      { _id: req.params.id }
    );
    const formattedResponse = CustomResponse.deleteResponseFormat(
      removedHandlinginstructioncode
    );
    res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

HandlinginstructioncodesController.putHandlinginstructioncodesById = async (
  req,
  res
) => {
  try {
    const updatedHandlinginstructioncode =
      await Handlinginstructioncode.updateOne(
        { _id: req.params.id },
        {
          $set: {
            codeListVersion: req.body.codeListVersion,
          },
        }
      );
    const formattedResponse = CustomResponse.updateResponseFormat(
      updatedHandlinginstructioncode
    );
    res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

module.exports = HandlinginstructioncodesController;
