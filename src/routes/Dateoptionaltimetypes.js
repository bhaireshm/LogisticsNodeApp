const express = require("express");
const DateoptionaltimetypesController = require("../controllers/dateoptionaltimetype-controller");
const router = express.Router();
const verify = require("./verifyToken");

router.get(
  "/",
  verify,
  DateoptionaltimetypesController.getAllDateoptionaltimetypes
);

router.get(
  "/:id",
  verify,
  DateoptionaltimetypesController.getDateoptionaltimetypeById
);

router.post(
  "/",
  verify,
  DateoptionaltimetypesController.postDateoptionaltimetype
);

router.delete(
  "/:id",
  verify,
  DateoptionaltimetypesController.deleteDateoptionaltimetypeById
);

router.put(
  "/:id",
  verify,
  DateoptionaltimetypesController.putDateoptionaltimetype
);

module.exports = router;
