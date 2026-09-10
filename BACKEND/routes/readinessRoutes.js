const express = require("express");

const router = express.Router();

const {
  getReadiness
} = require("../controllers/readinessController");


// ==========================================
// GET SUBMISSION READINESS
// ==========================================

router.get("/", getReadiness);


// ==========================================
// EXPORT
// ==========================================

module.exports = router;