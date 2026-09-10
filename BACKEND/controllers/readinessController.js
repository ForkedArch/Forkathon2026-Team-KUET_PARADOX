// ==========================================
// SUBMISSION READINESS CONTROLLER
// ==========================================

const {
  tasks,
  checklist,
  teamMembers,
  files
} = require("../data/temporaryData");

const {
  calculateReadiness
} = require("../services/readinessEngine");


// ==========================================
// GET SUBMISSION READINESS
// ==========================================

const getReadiness = (req, res) => {

  // ==========================================
  // 1. TASK PROGRESS
  // ==========================================

  let tasksProgress = 0;

  if (tasks.length > 0) {

    const completedTasks = tasks.filter(
      (task) => task.status === "Completed"
    ).length;

    tasksProgress =
      (completedTasks / tasks.length) * 100;

  } else {

    tasksProgress = 100;

  }


  // ==========================================
  // 2. CHECKLIST PROGRESS
  // ==========================================

  let checklistProgress = 0;

  if (checklist.length > 0) {

    const completedChecklist =
      checklist.filter(
        (item) => item.completed === true
      ).length;

    checklistProgress =
      (completedChecklist / checklist.length) * 100;

  } else {

    checklistProgress = 100;

  }


  // ==========================================
  // 3. TEAM PROGRESS
  // ==========================================

  let teamProgress = 0;

  if (teamMembers.length > 0) {

    const availableMembers =
      teamMembers.filter(
        (member) => member.status === "Available"
      ).length;

    teamProgress =
      (availableMembers / teamMembers.length) * 100;

  } else {

    teamProgress = 0;

  }


  // ==========================================
  // 4. FINAL FILE PROGRESS
  // ==========================================

  let finalFileProgress = 0;

  const finalFile = files.find(
    (file) => file.isFinal === true
  );

  if (finalFile) {

    finalFileProgress = 100;

  }


  // ==========================================
  // 5. README PROGRESS
  // ==========================================

  // README is currently treated as ready
  // because the project already has README.md

  const readmeProgress = 100;


  // ==========================================
  // CALCULATE FINAL SCORE
  // ==========================================

  const readiness = calculateReadiness({

    tasksProgress:
      Math.round(tasksProgress),

    checklistProgress:
      Math.round(checklistProgress),

    teamProgress:
      Math.round(teamProgress),

    finalFileProgress:
      Math.round(finalFileProgress),

    readmeProgress:
      readmeProgress

  });


  // ==========================================
  // SEND RESPONSE
  // ==========================================

  res.json({

    success: true,

    score: readiness.score,

    status: readiness.status,

    canSubmit: readiness.canSubmit,

    breakdown: {

      tasks: Math.round(tasksProgress),

      checklist: Math.round(checklistProgress),

      team: Math.round(teamProgress),

      finalFile: Math.round(finalFileProgress),

      readme: readmeProgress

    }

  });

};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getReadiness
};