const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const {
  getAllAddress,
  getAddressById,
  postAddress,
  deleteAddressById,
  putAddressById,
} = require("../controllers/address-controller");

router.get("/", verify, getAllAddress);

router.get("/:id", verify, getAddressById);

router.post("/", verify, postAddress);

router.delete("/:id", verify, deleteAddressById);

router.put("/:id", verify, putAddressById);

module.exports = router;
