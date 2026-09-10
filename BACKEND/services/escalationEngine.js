const checkTaskEscalation = ({
  task,
  assignedMember,
  remainingMinutes
}) => {

  // Task already completed
  if (task.status === "Completed") {
    return {
      escalated: false,
      reason: "Task is already completed"
    };
  }


  // No member assigned
  if (!assignedMember) {
    return {
      escalated: true,
      newPriority: "Critical",
      reason: "Task has no assigned team member"
    };
  }


  // Deadline is close
  const deadlineClose = remainingMinutes <= 60;


  // Assigned member unavailable
  const memberUnavailable =
    assignedMember.status !== "Available";


  // Main escalation condition
  if (deadlineClose && memberUnavailable) {

    return {
      escalated: true,
      newPriority: "Critical",
      reason:
        "Deadline is close and assigned member is unavailable"
    };

  }


  // No escalation required
  return {
    escalated: false,
    reason: "No escalation required"
  };

};


module.exports = {
  checkTaskEscalation
};