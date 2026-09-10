const { emergency } = require("../data/temporaryData");

// ===============================
// GET EMERGENCY STATUS
// ===============================

const getEmergencyStatus = (req, res) => {

  res.json({
    success: true,
    emergencyMode: emergency.active,
    panicActive: emergency.panicActive
  });

};


// ===============================
// ACTIVATE EMERGENCY MODE
// ===============================

const activateEmergency = (req, res) => {

  emergency.active = true;

  res.json({
    success: true,
    message: "Emergency Mode activated",
    emergencyMode: emergency.active,
    panicActive: emergency.panicActive
  });

};


// ===============================
// DEACTIVATE EMERGENCY MODE
// ===============================

const deactivateEmergency = (req, res) => {

  emergency.active = false;
  emergency.panicActive = false;

  res.json({
    success: true,
    message: "Emergency Mode deactivated",
    emergencyMode: emergency.active,
    panicActive: emergency.panicActive
  });

};


// ===============================
// TEAM PANIC BUTTON
// ===============================

const triggerPanic = (req, res) => {

  emergency.active = true;
  emergency.panicActive = true;

  res.json({
    success: true,
    message: "TEAM PANIC activated",
    emergencyMode: emergency.active,
    panicActive: emergency.panicActive
  });

};


// ===============================
// EXPORT FUNCTIONS
// ===============================

module.exports = {
  getEmergencyStatus,
  activateEmergency,
  deactivateEmergency,
  triggerPanic
};