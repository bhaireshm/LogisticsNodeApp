exports.deleteResponseFormat = (data) => {
  if (data && typeof data === "object") {
    console.log("deleteResponseFormat", data);
    const status = data.deletedCount > 0 && data.n > 0 ? true : false;
    const msg =
      data.deletedCount > 0 && data.n > 0 ? "delete successful" : "failed";
    for (const l in data) if (l != "message") delete data[l];
    data["status"] = status;
    data["message"] = data["message"] ? data["message"] : msg;
  }
  return data;
};

exports.updateResponseFormat = (data) => {
  if (data && typeof data === "object") {
    console.log("updateResponseFormat", data);
    const status = data.nModified > 0 && data.n > 0 ? true : false;
    const msg =
      data.nModified > 0 && data.n > 0 && data.ok > 0
        ? "update successful"
        : data.nModified > 0 && data.n > 0
        ? "nothing to update"
        : "update failed";
    for (const l in data) if (l != "message") delete data[l];
    data["status"] = status;
    data["message"] = data["message"] ? data["message"] : msg;
  }
  return data;
};

exports.sendError = (err, doc, res, callback) => {
  if (err) return res.send(err);
  if (callback) return callback(doc);
  return doc;
};

exports.serviceResponse = (msg, s = true) => {
  return { message: msg, status: s };
};

exports.APISuccessResponse = (d, m = "Fetch successfull", s = true) => {
  return { status: s, data: d, message: m };
};

exports.APIErrorResponse = (d, m = "Failed", s = false) => {
  return { status: s, data: d, message: m };
};