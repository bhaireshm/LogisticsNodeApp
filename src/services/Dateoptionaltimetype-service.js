const { serviceResponse } = require("../helpers/response");
const Dateoptionaltimetype = require("../models/Dateoptionaltimetype");
var DateoptionaltimetypeService = {};

DateoptionaltimetypeService.createDateoptionaltimetype = async (date, time) => {
  try {
    if (!date)
      return serviceResponse("Dateoptionaltimetype Date cannot be empty.");
    if (!time)
      return serviceResponse("Dateoptionaltimetype Time cannot be empty.");

    const dateoptionaltimetype = new Dateoptionaltimetype({
      date: new Date(date).toUTCString(),
      time: new Date(time).toUTCString(),
    });
    return await dateoptionaltimetype.save();
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};

DateoptionaltimetypeService.updateDateoptionaltimetype = async (
  id,
  date,
  time
) => {
  try {
    if (!id) return serviceResponse("Dateoptionaltimetype ID cannot be empty.");
    if (!date)
      return serviceResponse("Dateoptionaltimetype Date cannot be empty.");
    if (!time)
      return serviceResponse("Dateoptionaltimetype Time cannot be empty.");

    return await Dateoptionaltimetype.findOne({ _id: id })
      .then((result) => {
        if (!result) return serviceResponse("Data not found for the given ID");

        return Dateoptionaltimetype.updateOne(
          { _id: id },
          {
            $set: {
              date: date,
              time: time,
            },
          }
        );
      })
      .catch((err) => {
        return err;
      });
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};

module.exports = DateoptionaltimetypeService;
