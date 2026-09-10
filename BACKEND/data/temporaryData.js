// Temporary data for the Deadline Emergency Coordination App
// Later this data will be stored in Supabase.

const project = {
  id: 1,
  name: "Demo Project",
  deadline: "11:59 PM"
};

const teamMembers = [];

const tasks = [];

const checklist = [
  { id: 1, item: "Code completed", completed: false },
  { id: 2, item: "Frontend tested", completed: false },
  { id: 3, item: "Backend tested", completed: false },
  { id: 4, item: "Final file created", completed: false },
  { id: 5, item: "README updated", completed: false },
  { id: 6, item: "GitHub updated", completed: false },
  { id: 7, item: "Submission link checked", completed: false },
  { id: 8, item: "Submitter confirmed", completed: false }
];

const files = [];

const emergency = {
  active: false,
  panicActive: false
};

module.exports = {
  project,
  teamMembers,
  tasks,
  checklist,
  files,
  emergency
};