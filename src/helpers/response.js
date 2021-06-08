const { logger } = require("./logger");

const CustomResponse = {
  deleteResponseFormat(data) {
    if (data && typeof data === "object") {
      logger("deleteResponseFormat " + JSON.stringify(data));
      let status = false,
        msg = "delete failed.";
      if (data.deletedCount > 0 && data.n > 0) {
        status = true;
        msg = "delete successful.";
      }
      if (data.deletedCount == 0 && data.n == 0) {
        msg = "ID not found / Invalid ID.";
      }
      for (const l in data) if (l != "message") delete data[l];
      data["status"] = status;
      data["message"] = data["message"] ? data["message"] : msg;
    }
    return data;
  },

  updateResponseFormat(data) {
    if (data && typeof data === "object") {
      logger("updateResponseFormat " + JSON.stringify(data));
      let status = false,
        msg = "update failed / Invalid ID.";
      if (data.nModified > 0 && data.n > 0) {
        status = true;
        msg = "update successful.";
      }
      if (data.nModified == 0 && data.n > 0) {
        msg = "nothing to update.";
      }
      for (const l in data) if (l != "message") delete data[l];
      data["status"] = status;
      data["message"] = data["message"] ? data["message"] : msg;
    }
    return data;
  },
  sendError(err, doc, res, callback) {
    if (err) return res.send(err);
    if (callback) return callback(doc);
    return doc;
  },

  serviceResponse(msg, s = true) {
    return { message: msg, status: s };
  },

  APISuccessResponse(d, m = "Fetch successfull", s = true) {
    return { status: s, data: d, message: m };
  },

  APIErrorResponse(d, m = "Failed", s = false) {
    return { status: s, data: d, message: m };
  },
};

module.exports = CustomResponse;
