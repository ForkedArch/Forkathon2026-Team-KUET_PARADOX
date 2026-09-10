const { tasks, checklist, teamMembers, files } = require("../data/temporaryData");

const { calculateRisk } = require("../services/riskEngine");

const getRisk = (req, res) => {

  const now = new Date();

  const bangladeshNow = new Date(
    now.getTime() + 6 * 60 * 60 * 1000
  );

  const deadline = new Date(bangladeshNow);

  deadline.setHours(23, 59, 0, 0);

  if (deadline <= bangladeshNow) {
    deadline.setDate(deadline.getDate() + 1);
  }

  const remainingSeconds = Math.max(
    0,
    Math.floor((deadline - bangladeshNow) / 1000)
  );

  const remainingMinutes = Math.floor(
    remainingSeconds / 60
  );

  const highPriorityTasks = tasks.filter(
    (task) =>
      task.priority === "High" &&
      task.status !== "Completed"
  ).length;

  const unavailableMembers = teamMembers.filter(
    (member) =>
      member.status !== "Available"
  ).length;

  const finalFileReady = files.length > 0;

  const completedChecklist = checklist.filter(
    (item) => item.completed === true
  ).length;

  const checklistProgress =
    checklist.length === 0
      ? 100
      : (completedChecklist / checklist.length) * 100;

  const submitterAvailable = teamMembers.some(
    (member) =>
      member.role === "Submitter" &&
      member.status === "Available"
  );

  const risk = calculateRisk({
    remainingMinutes,
    highPriorityTasks,
    unavailableMembers,
    finalFileReady,
    checklistProgress,
    submitterAvailable
  });

  res.json({
    success: true,
    score: risk.score,
    level: risk.level,
    message: risk.message,
    details: {
      remainingMinutes,
      highPriorityTasks,
      unavailableMembers,
      finalFileReady,
      checklistProgress: Math.round(checklistProgress),
      submitterAvailable
    }
  });
};

module.exports = {
  getRisk
};