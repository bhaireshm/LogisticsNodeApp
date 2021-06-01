const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const LogisticservicesbuyerController = require("../controllers/Logisticservicesbuyer-controller");

router.get(
  "/",
  verify,
  LogisticservicesbuyerController.getAllLogisticservicesbuyer
);

router.get(
  "/:id",
  verify,
  LogisticservicesbuyerController.getLogisticservicesbuyerById
);

router.post(
  "/",
  verify,
  LogisticservicesbuyerController.postLogisticservicesbuyer
);

router.delete(
  "/:id",
  verify,
  LogisticservicesbuyerController.deleteLogisticservicesbuyerById
);

router.put(
  "/:id",
  verify,
  LogisticservicesbuyerController.updateLogisticservicesbuyerById
);

module.exports = router;
