const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const {
  getAllEcom_attributevaluepairlisttype,
  getEcom_attributevaluepairlisttypeById,
  postEcom_attributevaluepairlisttype,
  deleteEcom_attributevaluepairlisttype,
  putEcom_attributevaluepairlisttype,
} = require("../controllers/Ecom_attributevaluepairlisttype-controller");

router.get("/", verify, getAllEcom_attributevaluepairlisttype);

router.get("/:id", verify, getEcom_attributevaluepairlisttypeById);

router.post("/", verify, postEcom_attributevaluepairlisttype);

router.delete("/:id", verify, deleteEcom_attributevaluepairlisttype);

router.put("/:id", verify, putEcom_attributevaluepairlisttype);

module.exports = router;
