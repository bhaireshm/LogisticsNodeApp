const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const AddressController = require("../controllers/address-controller");

router.get("/", verify, AddressController.getAllAddress);

router.get("/:id", verify, AddressController.getAddressById);

router.post("/", verify, AddressController.postAddress);

router.delete("/:id", verify, AddressController.deleteAddressById);

router.put("/:id", verify, AddressController.putAddressById);

module.exports = router;
