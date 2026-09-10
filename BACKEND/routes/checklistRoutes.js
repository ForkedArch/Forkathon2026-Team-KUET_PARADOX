const express = require("express");

const router = express.Router();

const {
  getChecklist,
  updateChecklist
} = require("../controllers/checklistController");

router.get("/", getChecklist);

router.put("/:id", updateChecklist);

module.exports = router;