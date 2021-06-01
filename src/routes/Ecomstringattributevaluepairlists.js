const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const EcomstringattributevaluepairlistController = require("../controllers/Ecomstringattributevaluepairlist-controller");

router.get(
  "/",
  verify,
  EcomstringattributevaluepairlistController.getAllEcomstringattributevaluepairlist
);

router.get(
  "/:id",
  verify,
  EcomstringattributevaluepairlistController.getEcomstringattributevaluepairlistById
);

router.post(
  "/",
  verify,
  EcomstringattributevaluepairlistController.postEcomstringattributevaluepairlist
);

router.delete(
  "/:id",
  verify,
  EcomstringattributevaluepairlistController.deleteEcomstringattributevaluepairlistById
);

router.put(
  "/:id",
  verify,
  EcomstringattributevaluepairlistController.putEcomstringattributevaluepairlistById
);

module.exports = router;
