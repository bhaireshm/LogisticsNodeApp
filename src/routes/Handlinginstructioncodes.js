const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const HandlinginstructioncodesController = require("../controllers/Handlinginstructioncodes-controller");

router.get(
  "/",
  verify,
  HandlinginstructioncodesController.getAllHandlinginstructioncodes
);

router.get(
  "/:id",
  verify,
  HandlinginstructioncodesController.getHandlinginstructioncodesById
);

router.post(
  "/",
  verify,
  HandlinginstructioncodesController.postHandlinginstructioncodes
);

router.delete(
  "/:id",
  verify,
  HandlinginstructioncodesController.deleteHandlinginstructioncodesById
);

router.put(
  "/:id",
  verify,
  HandlinginstructioncodesController.putHandlinginstructioncodesById
);

module.exports = router;
