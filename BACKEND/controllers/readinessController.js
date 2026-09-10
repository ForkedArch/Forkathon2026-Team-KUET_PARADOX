// ==========================================
// SUBMISSION READINESS CONTROLLER
// ==========================================

const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

const {
  calculateReadiness
} = require("../services/readinessEngine");


// ==========================================
// GET SUBMISSION READINESS
// ==========================================

const getReadiness = async (req, res) => {
  try {
    // Parallel fetching for optimal performance
    const [tasksRes, checklistRes, teamRes, filesRes] = await Promise.all([
      supabase.from('tasks').select('*'),
      supabase.from('checklists').select('*'),
      supabase.from('team_members').select('*'),
      supabase.from('project_files').select('*')
    ]);

    const tasks = tasksRes.data || [];
    const checklist = checklistRes.data || [];
    const teamMembers = teamRes.data || [];
    const files = filesRes.data || [];

    // ==========================================
    // 1. TASK PROGRESS
    // ==========================================

    let tasksProgress = 0;

    if (tasks.length > 0) {
      const completedTasks = tasks.filter(
        (task) => task.status === "Completed" || task.status === "completed"
      ).length;

      tasksProgress = (completedTasks / tasks.length) * 100;
    } else {
      tasksProgress = 100;
    }


    // ==========================================
    // 2. CHECKLIST PROGRESS
    // ==========================================

    let checklistProgress = 0;

    if (checklist.length > 0) {
      const completedChecklist = checklist.filter(
        (item) => item.is_completed === true || item.completed === true
      ).length;

      checklistProgress = (completedChecklist / checklist.length) * 100;
    } else {
      checklistProgress = 100;
    }


    // ==========================================
    // 3. TEAM PROGRESS
    // ==========================================

    let teamProgress = 0;

    if (teamMembers.length > 0) {
      const availableMembers = teamMembers.filter(
        (member) => member.status === "Available" || member.role !== null
      ).length;

      teamProgress = (availableMembers / teamMembers.length) * 100;
    } else {
      teamProgress = 0;
    }


    // ==========================================
    // 4. FINAL FILE PROGRESS
    // ==========================================

    let finalFileProgress = 0;

    const finalFile = files.find(
      (file) => file.is_final === true || file.isFinal === true
    );

    if (finalFile) {
      finalFileProgress = 100;
    }


    // ==========================================
    // 5. README PROGRESS
    // ==========================================

    const readmeProgress = 100;


    // ==========================================
    // CALCULATE FINAL SCORE
    // ==========================================

    const readiness = calculateReadiness({
      tasksProgress: Math.round(tasksProgress),
      checklistProgress: Math.round(checklistProgress),
      teamProgress: Math.round(teamProgress),
      finalFileProgress: Math.round(finalFileProgress),
      readmeProgress: readmeProgress
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

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  getReadiness
};