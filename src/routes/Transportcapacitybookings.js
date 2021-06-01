const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const TransportcapacitybookingController = require("../controllers/transportcapacitybooking-controller");

router.get("/", verify, TransportcapacitybookingController.getAllBookings);

router.get("/filter", verify, TransportcapacitybookingController.search);

router.get("/:id", verify, TransportcapacitybookingController.getBookingById);

router.post("/", verify, TransportcapacitybookingController.postBooking);

router.delete("/:id", verify, TransportcapacitybookingController.deleteBooking);

router.put("/:id", verify, TransportcapacitybookingController.updateBooking);

module.exports = router;
