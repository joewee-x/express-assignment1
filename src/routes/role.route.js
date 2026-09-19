const express = require("express");
const authenticate = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const {admin, user} = require("../controllers/roleController");

const router = express.Router();

router.get("/admin", authenticate, authorization,  admin);

module.exports = router;