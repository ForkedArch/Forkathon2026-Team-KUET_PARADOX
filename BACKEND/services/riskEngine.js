const calculateRisk = ({
  remainingMinutes,
  highPriorityTasks,
  unavailableMembers,
  finalFileReady,
  checklistProgress,
  submitterAvailable
}) => {

  let score = 100;

  if (remainingMinutes <= 10) {
    score -= 35;
  } else if (remainingMinutes <= 30) {
    score -= 25;
  } else if (remainingMinutes <= 60) {
    score -= 15;
  }

  score -= highPriorityTasks * 10;

  score -= unavailableMembers * 5;

  if (!finalFileReady) {
    score -= 20;
  }

  score -= (100 - checklistProgress) * 0.15;

  if (!submitterAvailable) {
    score -= 15;
  }

  score = Math.max(
    0,
    Math.min(100, Math.round(score))
  );

  let level;
  let message;

  if (score >= 70) {
    level = "SAFE";
    message = "Project is on track";
  } else if (score >= 40) {
    level = "WARNING";
    message = "Attention required";
  } else {
    level = "CRITICAL";
    message = "Immediate action required";
  }

  return {
    score,
    level,
    message
  };
};

module.exports = {
  calculateRisk
};