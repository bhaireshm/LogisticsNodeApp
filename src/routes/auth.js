const router = require("express").Router();
const verify = require("./verifyToken");
const authController = require("../controllers/auth-controller");

router.post("/register", authController.registerUser);

router.post("/login", authController.login);

router.get("/", verify, authController.getUsers);

router.get("/:id", verify, authController.findUserById);

router.put("/:id", verify, authController.updateUser);

router.put("/updatePassword/:id", authController.updatePassword);

module.exports = router;
