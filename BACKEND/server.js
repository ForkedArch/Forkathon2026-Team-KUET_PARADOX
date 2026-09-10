```javascript
const express = require("express");

const cors = require("cors");


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


// ========================================
// MIDDLEWARE
// ========================================

// Allow frontend to communicate with backend
app.use(cors());

// Allow JSON data in requests
app.use(express.json());


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
