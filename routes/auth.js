const { Router } = require("express");
const {
  createUser,
  loginUser,
  returnLoginPage,
  returnSignUpPage,
  logOutUser,
} = require("../controllers/authController");

const router = Router();

router.get("/signup", returnSignUpPage);
router.post("/signup", createUser);
router.get("/login", returnLoginPage);
router.post("/login", loginUser);
router.get("/logout", logOutUser);

module.exports = router;