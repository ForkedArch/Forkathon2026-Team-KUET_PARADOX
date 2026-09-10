const express = require("express");

const router = express.Router();


const {
  getEscalatedTasks
} = require("../controllers/escalationController");


// GET escalated tasks
router.get("/", getEscalatedTasks);


module.exports = router;