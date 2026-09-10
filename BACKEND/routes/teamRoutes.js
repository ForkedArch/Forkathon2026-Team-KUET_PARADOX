const express = require("express");
const router = express.Router();
const {
  getTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember
} = require("../controllers/teamController");

// GET all team members
router.get("/", getTeamMembers);

// ADD new team member
router.post("/", addTeamMember);

// UPDATE team member
router.put("/:id", updateTeamMember);

// DELETE team member
router.delete("/:id", deleteTeamMember);

module.exports = router;