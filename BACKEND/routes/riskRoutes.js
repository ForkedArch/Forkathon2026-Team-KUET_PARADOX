const express = require("express");

const router = express.Router();

const {
  getRisk
} = require("../controllers/riskController");

router.get("/", getRisk);

module.exports = router;