import { useEffect, useState } from "react";

import "./App.css";

import { getTasks, getTeam, getChecklist, getDeadline, getRisk, getReadiness, addTask, updateTask, deleteTask } from './api.js';


import ReadinessDashboard from "./ReadinessCard";
// =========================================================
// RISK METER COMPONENT
// This component receives the calculated risk information
// from the main application and displays it visually.
// =========================================================

function RiskMeter({ riskInfo }) {

  return (

    <div className="risk-meter-card">

      <div className="risk-meter-header">

        <div>

          <p className="page-label">
            DEADLINE RISK
          </p>

          <h2>
            {riskInfo.icon} {riskInfo.level}
          </h2>

        </div>


        <div className="risk-score-box">

          <strong>
            {riskInfo.score}%
          </strong>

          <span>
            RISK
          </span>

        </div>

      </div>


      <div className="risk-progress-track">

        <div
          className={"risk-progress-fill " + riskInfo.className}
          style={{
            width: riskInfo.score + "%",
          }}
        />

      </div>


      <p className="risk-description">
        {riskInfo.message}
      </p>

    </div>

  );

}


// =========================================================
// MAIN APPLICATION
// =========================================================

function App() {



  
  const handleAddNewTask = async (e) => {
    e.preventDefault();
    const result = await addTask(newTask);
    if (result.success) {
      
      const updatedTasks = await getTasks();
      if (updatedTasks.success) setTasks(updatedTasks.tasks);
      
      
      setNewTask({ title: "", assignedTo: "", priority: "Medium", deadline: "" });
      alert("added successfully");
    } else {
      alert("find problem to add task");
    }
  };

 const getRisk = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/risk`);
    return await res.json();
  } catch (err) { return { success: false, risk: [] }; }
};

const getReadiness = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/readiness`);
    return await res.json();
  } catch (err) {
    return { success: false, readiness: {} };
  }
};

const handleDeleteTask = async (id) => {
    const result = await deleteTask(id);
    if (result.success) {
      
      const updatedTasks = await getTasks();
      if (updatedTasks.success) setTasks(updatedTasks.tasks);
    } else {
      alert("find problem to delete task");
    }
  };

  // =========================================================
  // ACTIVE PAGE
  // Controls which section is currently visible.
  // =========================================================

  const [activePage, setActivePage] = useState("Dashboard");


  // =========================================================
  // PROJECT INFORMATION
  // =========================================================

  const [projectName] = useState(
    "Deadline Emergency Command Center"
  );

  const [deadline] = useState("11:59 PM");


  // =========================================================
  // COUNTDOWN TIMER
  // Frontend demo timer for the current stage.
  // Backend deadline logic will be added later.
  // =========================================================

  const [countdown, setCountdown] = useState({

    hours: 4,

    minutes: 32,

    seconds: 18,

  });


  // =========================================================
  // TEAM MEMBERS
  // Demo members can be replaced with real team members.
  // =========================================================

  const [teamMembers, setTeamMembers] = useState([

    {
      id: 1,
      name: "Mahir",
      role: "Frontend",
      status: "Available",
    },

    {
      id: 2,
      name: "Abrar",
      role: "Backend",
      status: "Available",
    },

    {
      id: 3,
      name: "Joydeep",
      role: "Final Submission",
      status: "Offline",
    },

  ]);

// =========================================================
  // NEW MEMBER FORM
  // =========================================================

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    status: "Available",
  });

  // =========================================================
  // TASKS & API DATA LOADING
  // =========================================================

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete frontend",
      assignedTo: "Mahir",
      priority: "High",
      status: "Pending",
      deadline: "11:30 PM",
    },
    {
      id: 2,
      title: "Create README",
      assignedTo: "Abrar",
      priority: "Low",
      status: "Completed",
      deadline: "10:30 PM",
    },
    {
      id: 3,
      title: "Test final submission",
      assignedTo: "Joydeep",
      priority: "High",
      status: "Pending",
      deadline: "11:45 PM",
    },
    {
      id: 4,
      title: "Upload Final File",
      assignedTo: "Joydeep",
      priority: "High",
      status: "Pending",
      deadline: "11:50 PM",
    },
  ]);

  useEffect(() => {
    async function loadAllDashboardData() {
      const tasksData = await getTasks();
      if (tasksData.success) setTasks(tasksData.tasks);

      const teamData = await getTeam();

      if (teamData.success) setTeam(teamData.team);

      const checkData = await getChecklist();
      if (checkData.success) setChecklist(checkData.checklist);

      const deadlineData = await getDeadline();
      if (deadlineData.success) setDeadlines(deadlineData.deadlines);

      const riskData = await getRisk();
      if (riskData.success) setRisk(riskData.risk);

      const readyData = await getReadiness();
      if (readyData.success) setReadiness(readyData.readiness);
    }

    loadAllDashboardData();
  }, []);

  // =========================================================
  // NEW TASK FORM
  // =========================================================

  const [newTask, setNewTask] = useState({
    title: "",
    assignedTo: "",
    priority: "Medium",
    deadline: "",
  });

  // =========================================================
  // SMART CHECKLIST
  // =========================================================

  const [checklist, setChecklist] = useState([

    {
      id: 1,
      label: "Code completed",
      completed: true,
    },

    {
      id: 2,
      label: "Frontend tested",
      completed: true,
    },

    {
      id: 3,
      label: "Backend tested",
      completed: false,
    },

    {
      id: 4,
      label: "Final file created",
      completed: false,
    },

    {
      id: 5,
      label: "README updated",
      completed: false,
    },

    {
      id: 6,
      label: "GitHub updated",
      completed: false,
    },

    {
      id: 7,
      label: "Submission link checked",
      completed: false,
    },

    {
      id: 8,
      label: "Submitter confirmed",
      completed: false,
    },

  ]);


  // =========================================================
  // FINAL FILE GUARDIAN
  // Frontend simulation for file management.
  // =========================================================

  const [selectedFile, setSelectedFile] = useState(
    "final_submission.zip"
  );

  const [fileVersionNumber, setFileVersionNumber] = useState(3);

  const [fileStatus, setFileStatus] = useState("VERIFIED");

  const [fileIsFinal, setFileIsFinal] = useState(true);


  const [fileVersions, setFileVersions] = useState([

    {
      version: "v1",
      time: "10:32 PM",
      final: false,
    },

    {
      version: "v2",
      time: "11:05 PM",
      final: false,
    },

    {
      version: "v3",
      time: "11:42 PM",
      final: true,
    },

  ]);


  // =========================================================
  // PANIC BUTTON
  // Controls the emergency alert.
  // =========================================================

  const [panicActive, setPanicActive] = useState(false);


  // =========================================================
  // COUNTDOWN EFFECT
  // Decreases the timer every second.
  // =========================================================

  useEffect(() => {

    const timer = setInterval(() => {

      setCountdown((previousTime) => {

        let hours = previousTime.hours;

        let minutes = previousTime.minutes;

        let seconds = previousTime.seconds;


        if (seconds > 0) {

          seconds = seconds - 1;

        }

        else if (minutes > 0) {

          minutes = minutes - 1;

          seconds = 59;

        }

        else if (hours > 0) {

          hours = hours - 1;

          minutes = 59;

          seconds = 59;

        }


        return {

          hours,

          minutes,

          seconds,

        };

      });

    }, 1000);


    return () => clearInterval(timer);

  }, []);


  // =========================================================
  // ADD TEAM MEMBER
  // =========================================================

  function addTeamMember() {

    if (newMember.name.trim() === "") {

      return;

    }


    const member = {

      id: Date.now(),

      name: newMember.name.trim(),

      role:
        newMember.role.trim() || "Team Member",

      status: newMember.status,

    };


    setTeamMembers((previousMembers) => [

      ...previousMembers,

      member,

    ]);


    setNewMember({

      name: "",

      role: "",

      status: "Available",

    });

  }


  // =========================================================
  // DELETE TEAM MEMBER
  // =========================================================

  function deleteTeamMember(memberId) {

    setTeamMembers((previousMembers) =>

      previousMembers.filter(
        (member) => member.id !== memberId
      )

    );

  }


  // =========================================================
  // ADD TASK
  // =========================================================

  function addTask() {

    if (newTask.title.trim() === "") {

      return;

    }


    const task = {

      id: Date.now(),

      title: newTask.title.trim(),

      assignedTo:
        newTask.assignedTo || "Unassigned",

      priority: newTask.priority,

      status: "Pending",

      deadline:
        newTask.deadline || "Not set",

    };


    setTasks((previousTasks) => [





      ...previousTasks,

      task,

    ]);


    setNewTask({

      title: "",

      assignedTo: "",

      priority: "Medium",

      deadline: "",

    });

  }


  // =========================================================
  // COMPLETE TASK
  // =========================================================

  function completeTask(taskId) {

    setTasks((previousTasks) =>

      previousTasks.map((task) => {

        if (task.id === taskId) {

          return {

            ...task,

            status:
              task.status === "Completed"
                ? "Pending"
                : "Completed",

          };

        }


        return task;

      })

    );

  }


  // =========================================================
  // DELETE TASK
  // =========================================================

  function deleteTask(taskId) {

    setTasks((previousTasks) =>

      previousTasks.filter(
        (task) => task.id !== taskId
      )

    );

  }


  // =========================================================
  // TOGGLE CHECKLIST ITEM
  // =========================================================

  function toggleChecklist(checklistId) {

    setChecklist((previousChecklist) =>

      previousChecklist.map((item) => {

        if (item.id === checklistId) {

          return {

            ...item,

            completed: !item.completed,

          };

        }


        return item;

      })

    );

  }


  // =========================================================
  // FINAL FILE SELECTION
  // This simulates choosing a file from the computer.
  // Actual upload will be connected to backend later.
  // =========================================================

  function handleFileSelect(event) {

    if (
      !event.target.files ||
      event.target.files.length === 0
    ) {

      return;

    }


    const file = event.target.files[0];


    setSelectedFile(file.name);

    setFileStatus("SELECTED");

    setFileIsFinal(false);

  }


  // =========================================================
  // VERIFY FINAL FILE
  // =========================================================

  function verifyFile() {

    if (!selectedFile) {

      return;

    }


    setFileStatus("VERIFIED");

  }


  // =========================================================
  // MARK FILE AS FINAL
  // Creates a new frontend-only version.
  // =========================================================

  function markFileAsFinal() {

    if (!selectedFile) {

      return;

    }


    const nextVersion =
      fileVersionNumber + 1;


    const currentTime =
      new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit",

      });


    setFileVersionNumber(nextVersion);

    setFileIsFinal(true);

    setFileStatus("VERIFIED");


    setFileVersions((previousVersions) => [

      ...previousVersions.map((version) => ({

        ...version,

        final: false,

      })),

      {

        version: "v" + nextVersion,

        time: currentTime,

        final: true,

      },

    ]);

  }


  // =========================================================
  // BASIC COUNTERS
  // =========================================================

  const pendingTasks = tasks.filter(

    (task) => task.status === "Pending"

  ).length;


  const completedTasks = tasks.filter(

    (task) => task.status === "Completed"

  ).length;


  const totalTasks = tasks.length;


  // =========================================================
  // CHECKLIST PROGRESS
  // =========================================================

  const completedChecklist = checklist.filter(

    (item) => item.completed

  ).length;


  const checklistPercentage =

    checklist.length === 0

      ? 100

      : Math.round(

          (completedChecklist /
            checklist.length) *
            100

        );


  // =========================================================
  // TEAM STATUS
  // =========================================================

  const availableMembers = teamMembers.filter(

    (member) =>
      member.status === "Available"

  ).length;


  const unavailableMembers = teamMembers.filter(

    (member) =>
      member.status !== "Available"

  ).length;


  // =========================================================
  // SUBMITTER DETECTION
  // The system looks for a member whose role contains
  // "Submission" or "Submitter".
  // =========================================================

  const submitter = teamMembers.find((member) => {

    const role =
      member.role?.toLowerCase();

    return (

      role.includes("submission") ||

      role.includes("submitter")

    );

  });


  const submitterAvailable =

    submitter &&
    submitter.status === "Available";


  // =========================================================
  // TIME REMAINING
  // Converts the countdown into minutes.
  // =========================================================

  const remainingMinutes =

    countdown.hours * 60 +

    countdown.minutes +

    countdown.seconds / 60;


  // =========================================================
  // AUTOMATIC TASK ESCALATION
  // Finds pending tasks assigned to unavailable members.
  // =========================================================

  const escalatedTasks = tasks.filter((task) => {

    if (task.status === "Completed") {

      return false;

    }


    const assignedMember =
      teamMembers.find(

        (member) =>
          member.name === task.assignedTo

      );


    if (!assignedMember) {

      return false;

    }


    return assignedMember.status !== "Available";

  });


  // =========================================================
  // ESCALATION TARGET
  // Finds an available team member who can take over.
  // =========================================================

  function findEscalationMember(task) {

    const availableMember =
      teamMembers.find((member) => {

        if (member.status !== "Available") {

          return false;

        }


        if (member.name === task.assignedTo) {

          return false;

        }


        return true;

      });


    return availableMember
      ? availableMember.name
      : "No available member";

  }


  // =========================================================
  // RISK ENGINE
  // Calculates risk using several project conditions.
  // =========================================================

  function calculateRisk() {

    let score = 0;


    const highPriorityPending =
      tasks.filter(

        (task) =>
          task.status === "Pending" &&
          task.priority === "High"

      ).length;


    const mediumPriorityPending =
      tasks.filter(

        (task) =>
          task.status === "Pending" &&
          task.priority === "Medium"

      ).length;


    // Deadline pressure.

    if (remainingMinutes <= 5) {

      score += 55;

    }

    else if (remainingMinutes <= 15) {

      score += 45;

    }

    else if (remainingMinutes <= 30) {

      score += 30;

    }

    else if (remainingMinutes <= 60) {

      score += 15;

    }


    // Important unfinished tasks.

    score += Math.min(
      highPriorityPending * 15,
      30
    );


    score += Math.min(
      mediumPriorityPending * 5,
      10
    );


    // Team availability.

    score += Math.min(
      unavailableMembers * 8,
      16
    );


    // Final file condition.

    if (
      !fileIsFinal ||
      fileStatus !== "VERIFIED"
    ) {

      score += 25;

    }


    // Checklist condition.

    if (checklistPercentage < 50) {

      score += 15;

    }

    else if (checklistPercentage < 80) {

      score += 8;

    }


    // Submitter condition.

    if (!submitterAvailable) {

      score += 20;

    }


    score = Math.min(

      99,

      Math.max(5, Math.round(score))

    );


    let level = "SAFE";

    let icon = "🟢";

    let className = "safe";

    let message =
      "The team has enough time and the submission situation looks stable.";


    if (score >= 70) {

      level = "CRITICAL";

      icon = "🔴";

      className = "critical";

      message =
        "Immediate action is required. Important submission conditions are still unresolved.";

    }

    else if (score >= 40) {

      level = "WARNING";

      icon = "🟡";

      className = "warning";

      message =
        "Some important tasks or submission conditions still need attention.";

    }


    return {

      score,

      level,

      icon,

      className,

      message,

    };

  }


  const riskInfo = calculateRisk();


  // =========================================================
  // SUBMISSION READINESS SCORE
  // Combines tasks, checklist, team, final file and README.
  // =========================================================

  const taskPercentage =

    totalTasks === 0

      ? 100

      : Math.round(

          (completedTasks /
            totalTasks) *
            100

        );


  const teamPercentage =

    teamMembers.length === 0

      ? 0

      : Math.round(

          (availableMembers /
            teamMembers.length) *
            100

        );


  const finalFilePercentage =

    fileIsFinal &&
    fileStatus === "VERIFIED"

      ? 100

      : 0;


  // README readiness is represented by the checklist item.

  const readmeItem =
    checklist.find(

      (item) =>
        item.label === "README updated"

    );


  const readmePercentage =
    readmeItem && readmeItem.completed
      ? 100
      : 50;


  const readinessPercentage = Math.round(

    taskPercentage * 0.30 +

    checklistPercentage * 0.25 +

    teamPercentage * 0.15 +

    finalFilePercentage * 0.20 +

    readmePercentage * 0.10

  );


  // =========================================================
  // TIME FORMATTER
  // =========================================================

  function formatTime(value) {

    return String(value).padStart(2, "0");

  }


  // =========================================================
  // PANIC BUTTON
  // Activates Emergency Mode and displays an alert.
  // =========================================================
async function activatePanic() {
    setPanicActive(true);
    setActivePage("Emergency Mode");
    await triggerPanic();
  }


  // =========================================================
  // URGENT TASKS
  // Used by Emergency Mode.
  // =========================================================

  const urgentTasks = tasks

    .filter(
      (task) => task.status === "Pending"
    )

    .sort((firstTask, secondTask) => {

      const priorityValue = {

        High: 1,

        Medium: 2,

        Low: 3,

      };


      return (

        priorityValue[firstTask.priority] -

        priorityValue[secondTask.priority]

      );

    })

    .slice(0, 4);


  // =========================================================
  // PAGE RENDERING
  // =========================================================

  function showPage() {


    // =======================================================
    // DASHBOARD
    // =======================================================

    if (activePage === "Dashboard") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                EMERGENCY CONTROL CENTER
              </p>

              <h1>
                {projectName}
              </h1>

              <p>
                Stay organized and prevent
                last-minute submission problems.
              </p>

            </div>


            <div className="dashboard-header-actions">

              <button
                className="panic-button"
                onClick={activatePanic}
              >
                🚨 PANIC BUTTON
              </button>


             <button
                className="emergency-button"
                onClick={async () => {
                  setActivePage("Emergency Mode");
                  await handleActivateEmergency();
                }}
              >
                🚨 Emergency Mode
              </button>
            </div>

          </div>


          {panicActive && (

            <div className="panic-alert">

              <div className="panic-alert-icon">
                ⚠️
              </div>

              <div>

                <strong>
                  TEAM PANIC ALERT
                </strong>

                <p>
                  Emergency mode activated.
                  Focus only on critical
                  submission actions.
                </p>

              </div>

            </div>

          )}


          <div className="dashboard-grid">

            <div className="dashboard-card countdown-card">

              <span className="card-icon">
                ⏱️
              </span>

              <p>
                Time Remaining
              </p>

              <h2>

                {formatTime(countdown.hours)}:
                {formatTime(countdown.minutes)}:
                {formatTime(countdown.seconds)}

              </h2>

              <small>
                Deadline: {deadline}
              </small>

            </div>


            <div className="dashboard-card risk-card">

              <span className="card-icon">
                {riskInfo.icon}
              </span>

              <p>
                Current Risk
              </p>

              <h2 className={riskInfo.className + "-text"}>
                {riskInfo.level}
              </h2>

              <small>
                {riskInfo.score}% calculated risk
              </small>

            </div>


            <div className="dashboard-card readiness-card">

              <span className="card-icon">
                🎯
              </span>

              <p>
                Submission Readiness
              </p>

              <h2>
                {readinessPercentage}%
              </h2>

              <small>
                Tasks, checklist, team and file
              </small>

            </div>

          </div>


          <RiskMeter riskInfo={riskInfo} />


          <div className="readiness-preview-card">

            <div>

              <p className="page-label">
                SUBMISSION READINESS
              </p>

              <h2>
                {readinessPercentage}%
              </h2>

              <p>
                Overall project readiness before
                submission.
              </p>

            </div>


            <div className="readiness-preview-bar">

              <div
                className="readiness-preview-fill"
                style={{
                  width:
                    readinessPercentage + "%",
                }}
              />

            </div>


            <button
              onClick={() =>
                setActivePage("Readiness")
              }
            >
              View Score →
            </button>

          </div>


          <div className="overview-section">

            <div className="section-title-row">

              <div>

                <h2>
                  Project Overview
                </h2>

                <p>
                  A quick view of your team's
                  current situation.
                </p>

              </div>

            </div>


            <div className="overview-grid">

              <div className="overview-card">

                <span>
                  👥
                </span>

                <div>

                  <strong>
                    {teamMembers.length}
                  </strong>

                  <p>
                    Team Members
                  </p>

                </div>

              </div>


              <div className="overview-card">

                <span>
                  📋
                </span>

                <div>

                  <strong>
                    {pendingTasks}
                  </strong>

                  <p>
                    Pending Tasks
                  </p>

                </div>

              </div>


              <div className="overview-card">

                <span>
                  ✅
                </span>

                <div>

                  <strong>
                    {completedTasks}
                  </strong>

                  <p>
                    Completed Tasks
                  </p>

                </div>

              </div>


              <div className="overview-card">

                <span>
                  📁
                </span>

                <div>

                  <strong>
                    {fileIsFinal ? "Ready" : "Needs Review"}
                  </strong>

                  <p>
                    Final File
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="risk-panel">

            <div>

              <span
                className={
                  "risk-badge " +
                  riskInfo.className
                }
              >
                {riskInfo.icon} {riskInfo.level}
              </span>

              <h3>
                {riskInfo.message}
              </h3>

              <p>
                The risk engine checks deadline
                pressure, pending tasks, team
                availability, checklist progress,
                final file and submitter status.
              </p>

            </div>


            <button
              onClick={() =>
                setActivePage("Tasks")
              }
            >
              View Tasks →
            </button>

          </div>

        </div>

      );

    }


    // =======================================================
    // TASKS
    // =======================================================

    if (activePage === "Tasks") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                TASK MANAGEMENT
              </p>

              <h1>
                Tasks & Problems
              </h1>

              <p>
                Break your main problem into
                smaller tasks and assign them.
              </p>

            </div>

          </div>


          <div className="add-task-card">

            <h2>
              Add New Task
            </h2>

            <p>
              Add a problem or task that your
              team needs to handle.
            </p>


            <div className="task-form">

              <input
                type="text"
                placeholder="Task or problem name"
                value={newTask.title}
                onChange={(event) =>
                  setNewTask({

                    ...newTask,

                    title:
                      event.target.value,

                  })
                }
              />


              <select
                value={newTask.assignedTo}
                onChange={(event) =>
                  setNewTask({

                    ...newTask,

                    assignedTo:
                      event.target.value,

                  })
                }
              >

                <option value="">
                  Assign to member
                </option>


                {teamMembers.map((member) => (

                  <option
                    key={member.id}
                    value={member.name}
                  >
                    {member.name}
                  </option>

                ))}

              </select>


              <select
                value={newTask.priority}
                onChange={(event) =>
                  setNewTask({

                    ...newTask,

                    priority:
                      event.target.value,

                  })
                }
              >

                <option value="Low">
                  Low Priority
                </option>

                <option value="Medium">
                  Medium Priority
                </option>

                <option value="High">
                  High Priority
                </option>

              </select>


              <input
                type="text"
                placeholder="Deadline e.g. 11:45 PM"
                value={newTask.deadline}
                onChange={(event) =>
                  setNewTask({

                    ...newTask,

                    deadline:
                      event.target.value,

                  })
                }
              />


              <button
                className="add-button"
                onClick={addTask}
              >
                + Add Task
              </button>

            </div>

          </div>


          {escalatedTasks.length > 0 && (

            <div className="escalation-summary">

              <div className="escalation-summary-icon">
                ⚠️
              </div>

              <div>

                <strong>
                  {escalatedTasks.length}
                  {" "}
                  task
                  {escalatedTasks.length > 1
                    ? "s"
                    : ""}{" "}
                  need automatic escalation.
                </strong>

                <p>
                  Some assigned members are
                  currently unavailable.
                </p>

              </div>

            </div>

          )}


          <div className="tasks-section">

            <div className="section-title-row">

              <div>

                <h2>
                  Current Tasks
                </h2>

                <p>
                  {pendingTasks} pending ·{" "}
                  {completedTasks} completed
                </p>

              </div>

            </div>


            <div className="task-list">

              {tasks.length === 0 ? (

                <div className="empty-state">

                  <span>
                    📋
                  </span>

                  <h3>
                    No tasks yet
                  </h3>

                  <p>
                    Add your first task or problem
                    above.
                  </p>

                </div>

              ) : (

                tasks.map((task) => {

                  const assignedMember =
                    teamMembers.find(

                      (member) =>
                        member.name ===
                        task.assignedTo

                    );


                  const isUnavailable =

                    task.status === "Pending" &&

                    assignedMember &&

                    assignedMember.status !==
                      "Available";


                  const escalationMember =
                    findEscalationMember(task);


                  return (

                    <div
                      className={
                        task.status === "Completed"
                          ? "task-card task-completed"
                          : "task-card"
                      }
                      key={task.id}
                    >

                      <button
                        className={
                          task.status === "Completed"
                            ? "task-checkbox checked"
                            : "task-checkbox"
                        }
                        onClick={() =>
                          completeTask(task.id)
                        }
                      >
                        {task.status === "Completed"
                          ? "✓"
                          : ""}
                      </button>


                      <div className="task-main">

                        <h3>
                          {task.title}
                        </h3>

                        <div className="task-details">

                          <span>
                            👤 {task.assignedTo}
                          </span>

                          <span>
                            🕐 {task.deadline}
                          </span>

                        </div>

                      </div>


                      <span
                        className={
                          "priority priority-" +
                          task.priority?.toLowerCase()
                        }
                      >
                        {task.priority}
                      </span>


                      <span
                        className={
                          task.status === "Completed"
                            ? "task-status status-completed"
                            : "task-status status-pending"
                        }
                      >
                        {task.status}
                      </span>


                      <button
                        className="delete-button"
                        onClick={() =>
                          deleteTask(task.id)
                        }
                      >
                        Delete
                      </button>


                      {isUnavailable && (

                        <div className="task-escalation">

                          <div className="task-escalation-title">
                            ⚠️ ASSIGNEE UNAVAILABLE
                          </div>

                          <p>
                            Task automatically
                            escalated.
                          </p>

                          <strong>
                            New responsible member:
                            {" "}
                            {escalationMember}
                          </strong>

                        </div>

                      )}

                    </div>

                  );

                })

              )}

            </div>

          </div>

        </div>

      );

    }


    // =======================================================
    // TEAM
    // =======================================================

    if (activePage === "Team") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                TEAM MANAGEMENT
              </p>

              <h1>
                Your Team
              </h1>

              <p>
                Add the members who are actually
                working on this project.
              </p>

            </div>

          </div>


          <div className="team-alert">

            <span>
              💡
            </span>

            <div>

              <strong>
                Your team can have any number
                of members.
              </strong>

              <p>
                Add 3, 4, 5, or more people.
                Give one member a role such as
                "Submitter" or "Final Submission"
                so the risk engine can track them.
              </p>

            </div>

          </div>


          <div className="add-member-card">

            <h2>
              Add Team Member
            </h2>

            <p>
              Enter the member's own name and role.
            </p>


            <div className="member-form">

              <input
                type="text"
                placeholder="Member name"
                value={newMember.name}
                onChange={(event) =>
                  setNewMember({

                    ...newMember,

                    name:
                      event.target.value,

                  })
                }
              />


              <input
                type="text"
                placeholder="Role e.g. Developer"
                value={newMember.role}
                onChange={(event) =>
                  setNewMember({

                    ...newMember,

                    role:
                      event.target.value,

                  })
                }
              />


              <select
                value={newMember.status}
                onChange={(event) =>
                  setNewMember({

                    ...newMember,

                    status:
                      event.target.value,

                  })
                }
              >

                <option value="Available">
                  Available
                </option>

                <option value="Busy">
                  Busy
                </option>

                <option value="Offline">
                  Offline
                </option>

              </select>


              <button
                className="add-button"
                onClick={addTeamMember}
              >
                + Add Member
              </button>

            </div>

          </div>


          <div className="team-section">

            <div className="section-title-row">

              <div>

                <h2>
                  Team Members
                </h2>

                <p>
                  {teamMembers.length} member
                  {teamMembers.length !== 1
                    ? "s"
                    : ""}{" "}
                  currently added.
                </p>

              </div>

            </div>


            <div className="team-grid">

              {teamMembers.map((member) => (

                <div
                  className="team-member-card"
                  key={member.id}
                >

                  <div className="member-top">

                    <div className="member-avatar">

                      {member.name
                        .charAt(0)
                        .toUpperCase()}

                    </div>


                    <button
                      className="member-delete"
                      onClick={() =>
                        deleteTeamMember(member.id)
                      }
                    >
                      ×
                    </button>

                  </div>


                  <h3>
                    {member.name}
                  </h3>

                  <p className="member-role">
                    {member.role}
                  </p>


                  <span
                    className={
                      member.status === "Available"
                        ? "member-status available"
                        : member.status === "Busy"
                        ? "member-status busy"
                        : "member-status offline"
                    }
                  >
                    ● {member.status}
                  </span>


                  <div className="submission-owner">

                    <span>
                      👤
                    </span>

                    <div>

                      <strong>
                        {member.name ===
                        (submitter
                          ? submitter.name
                          : "")
                          ? "Submitter"
                          : "Team Member"}
                      </strong>

                      <p>
                        {member.name ===
                        (submitter
                          ? submitter.name
                          : "")
                          ? "Responsible for final submission"
                          : "Available for task assignment"}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      );

    }


    // =======================================================
    // CHECKLIST
    // =======================================================

    if (activePage === "Checklist") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                SUBMISSION SAFETY
              </p>

              <h1>
                Smart Submission Checklist
              </h1>

              <p>
                Important things the team should
                verify before submitting.
              </p>

            </div>

          </div>


          <div className="checklist-card">

            <div className="checklist-header">

              <div>

                <h2>
                  Submission Checklist
                </h2>

                <p>
                  {completedChecklist} of{" "}
                  {checklist.length} completed
                </p>

              </div>


              <div className="checklist-percentage">

                {checklistPercentage}%

              </div>

            </div>


            <div className="progress-track">

              <div
                className="progress-fill"
                style={{
                  width:
                    checklistPercentage + "%",
                }}
              />

            </div>


            <div className="checklist-list">

              {checklist.map((item) => (

                <button
                  className={
                    item.completed
                      ? "checklist-item completed"
                      : "checklist-item"
                  }
                  key={item.id}
                  onClick={() =>
                    toggleChecklist(item.id)
                  }
                >

                  <span
                    className={
                      item.completed
                        ? "checklist-checkbox checked"
                        : "checklist-checkbox"
                    }
                  >
                    {item.completed
                      ? "✓"
                      : ""}
                  </span>


                  <span className="checklist-label">
                    {item.label}
                  </span>


                  <span className="checklist-status">
                    {item.completed
                      ? "Done"
                      : "Missing"}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      );

    }


    // =======================================================
    // FINAL FILE
    // =======================================================

    if (activePage === "Final File") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                FILE SAFETY
              </p>

              <h1>
                Final File Guardian
              </h1>

              <p>
                Protect the team from submitting
                the wrong or unfinished file.
              </p>

            </div>

          </div>


          <div className="final-file-card">

            <div className="final-file-header">

              <div className="file-icon-large">
                📁
              </div>

              <div>

                <p className="page-label">
                  CURRENT FINAL FILE
                </p>

                <h2>
                  {selectedFile}
                </h2>

              </div>


              <span
                className={
                  fileStatus === "VERIFIED"
                    ? "file-status verified"
                    : "file-status selected"
                }
              >
                {fileStatus}
              </span>

            </div>


            <div className="file-info-grid">

              <div>

                <span>
                  Location
                </span>

                <strong>
                  Project / Submission
                </strong>

              </div>


              <div>

                <span>
                  Version
                </span>

                <strong>
                  v{fileVersionNumber}
                </strong>

              </div>


              <div>

                <span>
                  Final Status
                </span>

                <strong>
                  {fileIsFinal
                    ? "FINAL"
                    : "NOT FINAL"}
                </strong>

              </div>

            </div>


            <div className="file-action-row">

              <input
                id="final-file-upload"
                className="hidden-file-input"
                type="file"
                onChange={handleFileSelect}
              />


              <label
                htmlFor="final-file-upload"
                className="file-action-button"
              >
                📤 Upload Final File
              </label>


              <button
                className="file-action-button secondary"
                onClick={markFileAsFinal}
              >
                ⭐ Mark As Final
              </button>


              <button
                className="file-action-button secondary"
                onClick={verifyFile}
              >
                ✓ Verify File
              </button>

            </div>


            <div className="file-note">

              <span>
                💡
              </span>

              <p>
                Actual file upload, storage and
                version management will be connected
                to the backend later.
              </p>

            </div>

          </div>


          <div className="version-history">

            <div className="section-title-row">

              <div>

                <h2>
                  Previous Versions
                </h2>

                <p>
                  Keep track of important file versions.
                </p>

              </div>

            </div>


            <div className="version-list">

              {fileVersions.map((version) => (

                <div
                  className="version-item"
                  key={version.version}
                >

                  <div className="version-icon">
                    📄
                  </div>

                  <div className="version-main">

                    <strong>
                      {version.version}
                    </strong>

                    <span>
                      {version.time}
                    </span>

                  </div>


                  {version.final && (

                    <span className="final-badge">
                      ⭐ FINAL
                    </span>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      );

    }


    // =======================================================
    // EMERGENCY MODE
    // =======================================================

    if (activePage === "Emergency Mode") {

      const missingChecklist =
        checklist.filter(

          (item) => !item.completed

        ).slice(0, 3);


      return (

        <div className="emergency-page">

          <div className="emergency-top">

            <div>

              <p className="emergency-kicker">
                🚨 EMERGENCY MODE ACTIVE
              </p>

              <h1>
                Focus on what must happen now.
              </h1>

              <p>
                Unnecessary information is hidden.
                Only urgent submission actions are
                shown.
              </p>

            </div>


            <div className="emergency-time-box">

              <span>
                TIME LEFT
              </span>

              <strong>

                {formatTime(countdown.hours)}:
                {formatTime(countdown.minutes)}:
                {formatTime(countdown.seconds)}

              </strong>

            </div>

          </div>


          <div className="emergency-risk-row">

            <div className="emergency-risk-box">

              <span>
                CURRENT RISK
              </span>

              <strong>
                {riskInfo.icon} {riskInfo.level}
              </strong>

            </div>


            <div className="emergency-risk-box">

              <span>
                READINESS
              </span>

              <strong>
                {readinessPercentage}%
              </strong>

            </div>

          </div>
{/* ================================================= */}
          {/* EMERGENCY COMMAND CENTER CONTROLS & PANIC ALERT   */}
          {/* ================================================= */}
          <div className="emergency-control-section" style={{ padding: "20px", background: "#1e1e1e", borderRadius: "8px", margin: "20px 0" }}>
            <h3 style={{ color: "#ff4d4d", marginBottom: "15px" }}>🚨 Emergency Command Center</h3>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
              <button 
                onClick={handleActivateEmergency}
                style={{ background: "#d9534f", color: "white", border: "none", padding: "10px 16px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
              >
                Activate Emergency
              </button>

              <button 
                onClick={handleDeactivateEmergency}
                style={{ background: "#5cb85c", color: "white", border: "none", padding: "10px 16px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
              >
                Deactivate Emergency
              </button>

              <button 
                onClick={activatePanic}
                style={{ background: "#f0ad4e", color: "black", border: "none", padding: "10px 16px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
              >
                Trigger Panic Mode
              </button>
            </div>

            {panicActive && (
              <div className="panic-alert emergency-panic" style={{ display: "flex", alignItems: "center", gap: "15px", background: "#442222", border: "1px solid #ff4d4d", padding: "15px", borderRadius: "6px" }}>
                <div className="panic-alert-icon" style={{ fontSize: "24px" }}>
                  ⚠️
                </div>
                <div>
                  <strong style={{ color: "#ff9999", display: "block", marginBottom: "5px" }}>
                    TEAM PANIC ALERT
                  </strong>
                  <p style={{ margin: 0, color: "#ffcccc" }}>
                    Emergency mode activated. Critical tasks must be handled now.
                  </p>
                </div>
              </div>
            )}
          </div>


          <div className="immediate-actions">

            <div className="emergency-section-heading">

              <p className="page-label">
                IMMEDIATE ACTIONS
              </p>

              <h2>
                Do these first
              </h2>

            </div>


            <div className="emergency-action-list">

              <div className="emergency-action-card">

                <div className="action-number">
                  1
                </div>

                <div>

                  <strong>
                    Finish urgent tasks
                  </strong>

                  <p>
                    {urgentTasks.length > 0
                      ? urgentTasks[0].title
                      : "No pending urgent task"}
                  </p>

                </div>


                <button
                  onClick={() =>
                    setActivePage("Tasks")
                  }
                >
                  Open Tasks
                </button>

              </div>


              <div className="emergency-action-card">

                <div className="action-number">
                  2
                </div>

                <div>

                  <strong>
                    Verify final file
                  </strong>

                  <p>
                    {fileIsFinal &&
                    fileStatus === "VERIFIED"
                      ? "Final file is verified."
                      : "Final file still needs verification."}
                  </p>

                </div>


                <button
                  onClick={() =>
                    setActivePage("Final File")
                  }
                >
                  Open File
                </button>

              </div>


              <div className="emergency-action-card">

                <div className="action-number">
                  3
                </div>

                <div>

                  <strong>
                    Confirm submitter
                  </strong>

                  <p>
                    {submitter
                      ? submitter.name +
                        " — " +
                        submitter.status
                      : "No submitter confirmed"}
                  </p>

                </div>


                <button
                  onClick={() =>
                    setActivePage("Team")
                  }
                >
                  Check Team
                </button>

              </div>


              <div className="emergency-action-card">

                <div className="action-number">
                  4
                </div>

                <div>

                  <strong>
                    Complete missing checklist
                  </strong>

                  <p>
                    {missingChecklist.length > 0
                      ? missingChecklist[0].label
                      : "Checklist complete"}
                  </p>

                </div>


                <button
                  onClick={() =>
                    setActivePage("Checklist")
                  }
                >
                  Open Checklist
                </button>

              </div>

            </div>

          </div>


          <div className="emergency-bottom-actions">

            <button
              className="panic-button large"
              onClick={activatePanic}
            >
              🚨 PANIC BUTTON
            </button>


            <button
              className="exit-emergency"
              onClick={() => {

                setPanicActive(false);

                setActivePage("Dashboard");

              }}
            >
              Exit Emergency Mode
            </button>

          </div>

        </div>

      );

    }


    // =======================================================
    // SUBMISSION READINESS
    // =======================================================

    if (activePage === "Readiness") {

      return (

        <div className="page-content">

          <div className="page-header">

            <div>

              <p className="page-label">
                FINAL SUBMISSION CHECK
              </p>

              <h1>
                Submission Readiness
              </h1>

              <p>
                One score showing how ready the team
                is to submit.
              </p>

            </div>

          </div>


          <div className="readiness-main-card">

            <div className="readiness-score-circle">

              <strong>
                {readinessPercentage}%
              </strong>

              <span>
                READY
              </span>

            </div>


            <div className="readiness-main-info">

              <h2>
                Submission Readiness
              </h2>

              <p>
                The score combines the project's
                tasks, checklist, team availability,
                final file and README status.
              </p>


              <div className="readiness-large-bar">

                <div
                  className="readiness-large-fill"
                  style={{
                    width:
                      readinessPercentage +
                      "%",
                  }}
                />

              </div>

            </div>

          </div>


          <div className="breakdown-card">

            <div className="section-title-row">

              <div>

                <h2>
                  Score Breakdown
                </h2>

                <p>
                  Every major submission condition
                  contributes to the overall score.
                </p>

              </div>

            </div>


            <div className="breakdown-list">

              <div className="breakdown-row">

                <div>

                  <strong>
                    Tasks
                  </strong>

                  <span>
                    {completedTasks} of{" "}
                    {totalTasks} completed
                  </span>

                </div>

                <strong>
                  {taskPercentage}%
                </strong>

              </div>


              <div className="breakdown-row">

                <div>

                  <strong>
                    Checklist
                  </strong>

                  <span>
                    {completedChecklist} of{" "}
                    {checklist.length} completed
                  </span>

                </div>

                <strong>
                  {checklistPercentage}%
                </strong>

              </div>


              <div className="breakdown-row">

                <div>

                  <strong>
                    Team
                  </strong>

                  <span>
                    {availableMembers} of{" "}
                    {teamMembers.length} available
                  </span>

                </div>

                <strong>
                  {teamPercentage}%
                </strong>

              </div>


              <div className="breakdown-row">

                <div>

                  <strong>
                    Final File
                  </strong>

                  <span>
                    {fileIsFinal &&
                    fileStatus === "VERIFIED"
                      ? "Verified and final"
                      : "Needs verification"}
                  </span>

                </div>

                <strong>
                  {finalFilePercentage}%
                </strong>

              </div>


              <div className="breakdown-row">

                <div>

                  <strong>
                    README
                  </strong>

                  <span>
                    {readmeItem &&
                    readmeItem.completed
                      ? "Updated"
                      : "Needs verification"}
                  </span>

                </div>

                <strong>
                  {readmePercentage}%
                </strong>

              </div>

            </div>

          </div>

        </div>

      );

    }


    return null;

  }


  // =========================================================
  // MAIN APPLICATION LAYOUT
  // =========================================================

  return (

    <div className="app">

      <header className="topbar">

        <div className="project-title">

          <div className="project-icon">
            🚨
          </div>

          <div>

            <h2>
              Deadline Command Center
            </h2>

            <p>
              Prevent deadline disasters
            </p>

          </div>

        </div>


        <div className="topbar-right">

          <div className="top-deadline">

            <span>
              Deadline
            </span>

            <strong>
              {deadline}
            </strong>

          </div>


          <span
            className={
              "top-risk " +
              riskInfo.className
            }
          >
            {riskInfo.icon} {riskInfo.level}
          </span>


          <button
            className="top-emergency"
            onClick={() =>
              setActivePage("Emergency Mode")
            }
          >
            🚨 Emergency
          </button>

        </div>

      </header>


      <div className="main-layout">

        <aside className="sidebar">

          <div className="sidebar-section">

            <p className="sidebar-label">
              CONTROL CENTER
            </p>


            <button
              className={
                activePage === "Dashboard"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Dashboard")
              }
            >
              <span>
                🏠
              </span>

              Dashboard
            </button>


            <button
              className={
                activePage === "Tasks"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Tasks")
              }
            >
              <span>
                📋
              </span>

              Tasks
            </button>


            <button
              className={
                activePage === "Team"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Team")
              }
            >
              <span>
                👥
              </span>

              Team
            </button>


            <button
              className={
                activePage === "Checklist"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Checklist")
              }
            >
              <span>
                ✅
              </span>

              Checklist
            </button>


            <button
              className={
                activePage === "Final File"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Final File")
              }
            >
              <span>
                📁
              </span>

              Final File
            </button>


            <button
              className={
                activePage === "Readiness"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage("Readiness")
              }
            >
              <span>
                🎯
              </span>

              Readiness
            </button>

          </div>


          <div className="sidebar-section emergency-sidebar">

            <p className="sidebar-label">
              EMERGENCY
            </p>


            <button
              className={
                activePage === "Emergency Mode"
                  ? "nav-item emergency-nav active"
                  : "nav-item emergency-nav"
              }
              onClick={() =>
                setActivePage("Emergency Mode")
              }
            >
              <span>
                🚨
              </span>

              Emergency Mode
            </button>

          </div>


          <div className="sidebar-footer">

            <div className="risk-mini">

              <span>
                Current Risk
              </span>

              <strong>
                {riskInfo.icon} {riskInfo.level}
              </strong>

            </div>

          </div>

        </aside>


        <main className="main-content">

          {showPage()}

        </main>

      </div>

    </div>

  );

}


export default App;