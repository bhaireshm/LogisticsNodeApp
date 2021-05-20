const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const transportcapacitybookingController = require("../controllers/transportcapacitybooking-controller");

router.get("/", verify, transportcapacitybookingController.getAllBookings);

router.get("/filter", verify, transportcapacitybookingController.search);

router.get("/:id", verify, transportcapacitybookingController.getBookingById);

router.post("/", verify, transportcapacitybookingController.postBooking);

router.delete("/:id", verify, transportcapacitybookingController.deleteBooking);

router.put("/:id", verify, transportcapacitybookingController.updateBooking);

module.exports = router;
