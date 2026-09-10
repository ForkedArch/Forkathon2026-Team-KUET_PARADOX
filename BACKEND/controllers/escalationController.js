const {
  tasks,
  teamMembers
} = require("../data/temporaryData");

const {
  checkTaskEscalation
} = require("../services/escalationEngine");


// ========================================
// GET ESCALATED TASKS
// ========================================

const getEscalatedTasks = (req, res) => {

  // Current time
  const now = new Date();


  // Bangladesh time
  const bangladeshNow = new Date(
    now.getTime() + 6 * 60 * 60 * 1000
  );


  // Today's deadline = 11:59 PM
  const deadline = new Date(bangladeshNow);

  deadline.setHours(23, 59, 0, 0);


  // If today's deadline already passed,
  // use tomorrow's deadline
  if (deadline <= bangladeshNow) {

    deadline.setDate(
      deadline.getDate() + 1
    );

  }


  // Calculate remaining minutes
  const remainingMinutes = Math.floor(
    (deadline - bangladeshNow) / 60000
  );


  // Store escalated tasks
  const escalatedTasks = [];


  // Check every task
  tasks.forEach((task) => {

    // Find assigned team member
    const assignedMember = teamMembers.find(
      (member) =>
        member.id === task.assignedTo
    );


    // Check escalation
    const result = checkTaskEscalation({

      task: task,

      assignedMember: assignedMember,

      remainingMinutes: remainingMinutes

    });


    // If escalation required
    if (result.escalated) {

      escalatedTasks.push({

        id: task.id,

        title: task.title,

        description: task.description,

        assignedTo: task.assignedTo,

        assignedMember:
          assignedMember
            ? assignedMember.name
            : "Unassigned",

        originalPriority:
          task.priority,

        newPriority:
          result.newPriority,

        status:
          task.status,

        escalated: true,

        escalationReason:
          result.reason

      });

    }

  });


  // Send response
  res.json({

    success: true,

    remainingMinutes:

      remainingMinutes,

    count:

      escalatedTasks.length,

    tasks:

      escalatedTasks

  });

};


// ========================================
// EXPORT
// ========================================

module.exports = {
  getEscalatedTasks
};