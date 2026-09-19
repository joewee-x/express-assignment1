const express = require("express");
const {userRegistered, userLogin} = require("../controllers/user");
const router = express.Router();
const validate = require("../middleware/validator");
const regSchema = require("../validators/registration");
const loginSchema = require("../validators/login")



router.post("/register", validate(regSchema), userRegistered);
router.post("/login", validate(loginSchema), userLogin)

module.exports = router;


