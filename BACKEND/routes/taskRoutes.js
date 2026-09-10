

const express = require("express");

const router = express.Router();

const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

// GET all tasks
router.get("/", getTasks);

// ADD new task
router.post("/", addTask);

// UPDATE task
router.put("/:id", updateTask);

// DELETE task
router.delete("/:id", deleteTask);

module.exports = router;