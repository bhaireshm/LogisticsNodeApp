const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const {
  getAllEcomstringattributevaluepairlist,
  getEcomstringattributevaluepairlistById,
  postEcomstringattributevaluepairlist,
  deleteEcomstringattributevaluepairlistById,
  putEcomstringattributevaluepairlistById,
} = require("../controllers/Ecomstringattributevaluepairlist-controller");

router.get("/", verify, getAllEcomstringattributevaluepairlist);

router.get("/:id", verify, getEcomstringattributevaluepairlistById);

router.post("/", verify, postEcomstringattributevaluepairlist);

router.delete("/:id", verify, deleteEcomstringattributevaluepairlistById);

router.put("/:id", verify, putEcomstringattributevaluepairlistById);

module.exports = router;
