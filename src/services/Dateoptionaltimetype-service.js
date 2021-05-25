const Dateoptionaltimetype = require("../models/Dateoptionaltimetype");

exports.createDateoptionaltimetype = async (date, time) => {
  try {
    if (!date) return response("Dateoptionaltimetype Date cannot be empty.");
    if (!time) return response("Dateoptionaltimetype Time cannot be empty.");

    const dateoptionaltimetype = new Dateoptionaltimetype({
      date: new Date(date).toUTCString(),
      time: new Date(time).toUTCString(),
    });
    return await dateoptionaltimetype.save();
  } catch (ex) {
    return response(ex.message);
  }
};

exports.updateDateoptionaltimetype = async (id, date, time) => {
  try {
    if (!id) return response("Dateoptionaltimetype ID cannot be empty.");
    if (!date) return response("Dateoptionaltimetype Date cannot be empty.");
    if (!time) return response("Dateoptionaltimetype Time cannot be empty.");

    return await Dateoptionaltimetype.findOne({ _id: id })
      .then((result) => {
        if (!result) return response("Data not found for the given ID");

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
    return response(ex.message);
  }
};

const response = (msg) => {
  return { message: msg };
};
