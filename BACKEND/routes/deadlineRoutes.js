const express = require("express");

const router = express.Router();

const {
  getDeadline
} = require("../controllers/deadlineController");

router.get("/", getDeadline);

module.exports = router;