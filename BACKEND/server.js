```javascript
const express = require("express");

const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");


// ========================================
// IMPORT ROUTES
// ========================================

const teamRoutes = require("./routes/teamRoutes");

const taskRoutes = require("./routes/taskRoutes");

const checklistRoutes = require("./routes/checklistRoutes");

const deadlineRoutes = require("./routes/deadlineRoutes");

const riskRoutes = require("./routes/riskRoutes");

const escalationRoutes = require("./routes/escalationRoutes");

const emergencyRoutes = require("./routes/emergencyRoutes");

const fileRoutes = require("./routes/fileRoutes");

const readinessRoutes = require("./routes/readinessRoutes");


// ========================================
// CREATE EXPRESS APP
// ========================================

const app = express();
const server = http.createServer(app);


// ========================================
// MIDDLEWARE
// ========================================

// Allow frontend to communicate with backend
app.use(cors());

// Allow JSON data in requests
app.use(express.json());

<<<<<<< HEAD

// ========================================
// HOME ROUTE
// ========================================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "KUET PARADOX Backend is running"
  });

});


// ========================================
// TEAM API
// ========================================

app.use("/api/team", teamRoutes);


// ========================================
// TASK API
// ========================================

app.use("/api/tasks", taskRoutes);


// ========================================
// CHECKLIST API
// ========================================

app.use("/api/checklist", checklistRoutes);


// ========================================
// DEADLINE API
// ========================================

app.use("/api/deadline", deadlineRoutes);


// ========================================
// RISK ENGINE API
// ========================================

app.use("/api/risk", riskRoutes);


// ========================================
// AUTOMATIC TASK ESCALATION API
// ========================================

app.use("/api/escalation", escalationRoutes);


// ========================================
// EMERGENCY MODE API
// ========================================

app.use("/api/emergency", emergencyRoutes);


// ========================================
// FINAL FILE GUARDIAN API
// ========================================

app.use("/api/files", fileRoutes);


// ========================================
// SUBMISSION READINESS API
// ========================================

app.use("/api/readiness", readinessRoutes);


// ========================================
// START SERVER
// ========================================

app.listen(5000, () => {

  console.log("---------------------------------");

  console.log("KUET PARADOX Backend");

  console.log("Server running on port 5000");

  console.log("---------------------------------");

});
```
=======
const io = new Server(server, {
  cors: { origin: "*" }
});

let projectState = {
  isLocked: false,
  finalFileUrl: null,
  submitter: null,
  backupSubmitter: null,
  checklist: [
    { id: 1, task: "README Added", completed: false },
    { id: 2, task: "Public Drive/Repository Link Verified", completed: false },
    { id: 3, task: "File Size Under Limit (<25MB)", completed: false },
    { id: 4, task: "Demo Video Link Included", completed: false }
  ]
};

app.get("/", (req, res) => {
  res.json({ message: "KUET PARADOX backend is running" });
});

app.get("/api/project/status", (req, res) => {
  res.json(projectState);
});

app.post("/api/project/lock-final", (req, res) => {
  const { fileUrl, lockedBy } = req.body;
  if (!fileUrl) {
    return res.status(400).json({ error: "fileUrl is required" });
  }

  projectState.isLocked = true;
  projectState.finalFileUrl = fileUrl;
  projectState.lockedBy = lockedBy || "Anonymous";

  io.emit("project_updated", projectState);

  res.json({ message: "Final file locked successfully", projectState });
});

app.post("/api/project/assign-roles", (req, res) => {
  const { submitter, backupSubmitter } = req.body;

  projectState.submitter = submitter || projectState.submitter;
  projectState.backupSubmitter = backupSubmitter || projectState.backupSubmitter;

  io.emit("project_updated", projectState);

  res.json({ message: "Submission roles assigned", projectState });
});

app.post("/api/project/checklist/toggle", (req, res) => {
  const { taskId, completed } = req.body;

  const item = projectState.checklist.find((t) => t.id === taskId);
  if (item) {
    item.completed = completed;
    io.emit("project_updated", projectState);
    return res.json({ message: "Checklist updated", checklist: projectState.checklist });
  }

  res.status(404).json({ error: "Checklist item not found" });
});

io.on("connection", (socket) => {
  console.log(`[Socket] Client connected: ${socket.id}`);

  socket.emit("project_updated", projectState);

  socket.on("trigger_panic_alert", (data) => {
    io.emit("panic_alert", {
      message: data.message || "EMERGENCY: Urgent attention required!",
      from: data.sender || "Teammate",
      timestamp: new Date().toLocaleTimeString()
    });
  });

  socket.on("disconnect", () => {
    console.log(`[Socket] Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 840cbffbfb9d11071efae09925db61e9c85bbdb0
