const express = require("express");
const {
  getAllDateoptionaltimetypes,
  getDateoptionaltimetypeById,
  postDateoptionaltimetype,
  deleteDateoptionaltimetypeById,
  putDateoptionaltimetype,
} = require("../controllers/dateoptionaltimetype-controller");
const router = express.Router();
const verify = require("./verifyToken");

router.get("/", verify, getAllDateoptionaltimetypes);

router.get("/:id", verify, getDateoptionaltimetypeById);

router.post("/", verify, postDateoptionaltimetype);

router.delete("/:id", verify, deleteDateoptionaltimetypeById);

router.put("/:id", verify, putDateoptionaltimetype);

module.exports = router;
