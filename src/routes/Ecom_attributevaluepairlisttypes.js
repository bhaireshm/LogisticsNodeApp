const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Ecom_attributevaluepairlisttypeController = require("../controllers/Ecom_attributevaluepairlisttype-controller");

router.get(
  "/",
  verify,
  Ecom_attributevaluepairlisttypeController.getAllEcom_attributevaluepairlisttype
);

router.get(
  "/:id",
  verify,
  Ecom_attributevaluepairlisttypeController.getEcom_attributevaluepairlisttypeById
);

router.post(
  "/",
  verify,
  Ecom_attributevaluepairlisttypeController.postEcom_attributevaluepairlisttype
);

router.delete(
  "/:id",
  verify,
  Ecom_attributevaluepairlisttypeController.deleteEcom_attributevaluepairlisttype
);

router.put(
  "/:id",
  verify,
  Ecom_attributevaluepairlisttypeController.putEcom_attributevaluepairlisttype
);

module.exports = router;
