const { tasks } = require("../data/temporaryData");

// GET all tasks
const getTasks = (req, res) => {
  res.json({
    success: true,
    tasks: tasks
  });
};

// ADD a new task
const addTask = (req, res) => {
  const { title, description, assignedTo, priority, status } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Task title is required"
    });
  }

  const newTask = {
    id: Date.now(),
    title: title,
    description: description || "",
    assignedTo: assignedTo || null,
    priority: priority || "Medium",
    status: status || "Pending"
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task added successfully",
    task: newTask
  });
};

// UPDATE a task
const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const {
    title,
    description,
    assignedTo,
    priority,
    status
  } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (assignedTo !== undefined) task.assignedTo = assignedTo;
  if (priority !== undefined) task.priority = priority;
  if (status !== undefined) task.status = status;

  res.json({
    success: true,
    message: "Task updated successfully",
    task: task
  });
};

// DELETE a task
const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const deletedTask = tasks.splice(index, 1);

  res.json({
    success: true,
    message: "Task deleted successfully",
    task: deletedTask[0]
  });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};