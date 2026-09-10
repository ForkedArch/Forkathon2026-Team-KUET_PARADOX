const { checklist } = require("../data/temporaryData");

// GET all checklist items
const getChecklist = (req, res) => {
  res.json({
    success: true,
    checklist: checklist
  });
};

// UPDATE checklist item
const updateChecklist = (req, res) => {
  const id = Number(req.params.id);

  const item = checklist.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Checklist item not found"
    });
  }

  const { completed } = req.body;

  if (completed !== undefined) {
    item.completed = completed;
  }

  res.json({
    success: true,
    message: "Checklist updated successfully",
    checklistItem: item
  });
};

module.exports = {
  getChecklist,
  updateChecklist
};