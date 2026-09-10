const { teamMembers } = require("../data/temporaryData");

// GET all team members
const getTeamMembers = (req, res) => {
  res.json({
    success: true,
    members: teamMembers
  });
};

// ADD a new team member
const addTeamMember = (req, res) => {
  const { name, role, status } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required"
    });
  }

  const newMember = {
    id: Date.now(),
    name: name,
    role: role || "Member",
    status: status || "Available"
  };

  teamMembers.push(newMember);

  res.status(201).json({
    success: true,
    message: "Team member added successfully",
    member: newMember
  });
};

// UPDATE a team member
const updateTeamMember = (req, res) => {
  const id = Number(req.params.id);

  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return res.status(404).json({
      success: false,
      message: "Team member not found"
    });
  }

  const { name, role, status } = req.body;

  if (name !== undefined) member.name = name;
  if (role !== undefined) member.role = role;
  if (status !== undefined) member.status = status;

  res.json({
    success: true,
    message: "Team member updated successfully",
    member: member
  });
};

// DELETE a team member
const deleteTeamMember = (req, res) => {
  const id = Number(req.params.id);

  const index = teamMembers.findIndex((member) => member.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Team member not found"
    });
  }

  const deletedMember = teamMembers.splice(index, 1);

  res.json({
    success: true,
    message: "Team member deleted successfully",
    member: deletedMember[0]
  });
};

module.exports = {
  getTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember
};