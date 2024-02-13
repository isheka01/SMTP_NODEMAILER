const express = require("express");
const router = express.Router();

const sendMail = require("../controller/smtp");

router.post("/", sendMail);

module.exports = router;
