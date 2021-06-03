const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Description70typeController = require("../controllers/Description70type-controller");

router.get("/", verify, Description70typeController.getAllDescription70type);

router.get(
  "/:id",
  verify,
  Description70typeController.getDescription70typeById
);

router.post("/", verify, Description70typeController.postDescription70type);

router.delete(
  "/:id",
  verify,
  Description70typeController.deleteDescription70typeById
);

router.put("/:id", verify, Description70typeController.postDescription70type);

module.exports = router;
