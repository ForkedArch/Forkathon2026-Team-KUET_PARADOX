const express = require("express");

const router = express.Router();

const {
  getEmergencyStatus,
  activateEmergency,
  deactivateEmergency,
  triggerPanic
} = require("../controllers/emergencyController");


// GET emergency status
router.get("/", getEmergencyStatus);


// Activate emergency mode
router.post("/activate", activateEmergency);


// Deactivate emergency mode
router.post("/deactivate", deactivateEmergency);


// Team panic button
router.post("/panic", triggerPanic);


module.exports = router;