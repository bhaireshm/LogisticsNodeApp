const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const TransactionalpartytypeController = require("../controllers/Transactionalpartytype-controller");

router.get(
  "/",
  verify,
  TransactionalpartytypeController.getAllTransactionalpartytype
);

router.get(
  "/:id",
  verify,
  TransactionalpartytypeController.getTransactionalpartytypeById
);

router.post(
  "/",
  verify,
  TransactionalpartytypeController.postTransactionalpartytype
);

router.delete(
  "/:id",
  verify,
  TransactionalpartytypeController.deleteTransactionalpartytypeById
);

router.put(
  "/:id",
  verify,
  TransactionalpartytypeController.putTransactionalpartytypeById
);

module.exports = router;
