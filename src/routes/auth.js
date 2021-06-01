const router = require("express").Router();
const verify = require("./verifyToken");
const AuthController = require("../controllers/auth-controller");

router.post("/register", AuthController.registerUser);

router.post("/login", AuthController.login);

router.get("/", verify, AuthController.getUsers);

router.get("/:id", verify, AuthController.findUserById);

router.put("/:id", verify, AuthController.updateUser);

router.put("/updatePassword/:id", AuthController.updatePassword);

module.exports = router;
