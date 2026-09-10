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

const emergencyRoutes = require("./routes/emergencyRoutes");

const fileRoutes = require("./routes/fileRoutes");

const readinessRoutes = require("./routes/readinessRoutes");




// ========================================
// CREATE EXPRESS APP & HTTP SERVER
// ========================================

const app = express();

const server = http.createServer(app);

const io = new Server(server, {

  cors: { origin: "*" }

});




// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());




// ========================================
// INITIAL STATE (For Realtime Project Sync)
// ========================================

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




// ========================================
// HOME ROUTE & STATUS API
// ========================================

app.get("/", (req, res) => {

  res.json({

    success: true,

    message: "KUET PARADOX Backend is running"

  });

});


app.get("/api/project/status", (req, res) => {

  res.json(projectState);

});




// ========================================
// EXISTING MODULE API ROUTES
// ========================================

app.use("/api/team", teamRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/checklist", checklistRoutes);

app.use("/api/deadline", deadlineRoutes);

app.use("/api/risk", riskRoutes);

app.use("/api/emergency", emergencyRoutes);

app.use("/api/files", fileRoutes);

app.use("/api/readiness", readinessRoutes);




// ========================================
// PROJECT ACTIONS API
// ========================================

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




// ========================================
// SOCKET.IO REALTIME EVENTS
// ========================================

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




// ========================================
// START SERVER
// ========================================

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {

  console.log("---------------------------------");

  console.log("KUET PARADOX Backend");

  console.log(`Server running on port ${PORT}`);

  console.log("---------------------------------");

});