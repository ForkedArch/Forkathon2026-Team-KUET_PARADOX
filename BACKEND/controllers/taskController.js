// In-Memory Tasks Array for Hackathon Demo
let tasksList = [
  { id: 1, title: "Setup Project Repository", description: "Initialize frontend and backend", completed: true, created_at: new Date().toISOString() },
  { id: 2, title: "Database & API Integration", description: "Connect routes with controllers", completed: false, created_at: new Date().toISOString() }
];

// GET all tasks
const getTasks = async (req, res) => {
  try {
    res.json({
      success: true,
      tasks: tasksList
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADD new task
const addTask = async (req, res) => {
  try {
    const newTask = {
      id: Date.now(),
      title: req.body.title || "Untitled Task",
      description: req.body.description || "",
      completed: req.body.completed || false,
      created_at: new Date().toISOString()
    };

    tasksList.push(newTask);

    res.status(201).json({
      success: true,
      task: newTask
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskIndex = tasksList.findIndex(t => t.id == id);

    if (taskIndex === -1) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    tasksList[taskIndex] = {
      ...tasksList[taskIndex],
      ...req.body
    };

    res.json({
      success: true,
      task: tasksList[taskIndex]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    tasksList = tasksList.filter(t => t.id != id);

    res.json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};