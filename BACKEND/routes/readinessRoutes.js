const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// ==========================================
// SUPABASE CLIENT INITIALIZATION
// ==========================================
const SUPABASE_URL = process.env.SUPABASE_URL || "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// ==========================================
// GET SUBMISSION READINESS ROUTE
// ==========================================
router.get("/", async (req, res) => {
  try {
    // 1. Fetch files from Supabase to check if a final file is available
    const { data: files, error: fileError } = await supabase
      .from("files")
      .select("*");

    if (fileError) throw fileError;

    // Check if any uploaded file is marked as final
    const finalFileAvailable = files ? files.some(file => file.is_final === true) : false;

    // 2. Define readiness metrics and initial score calculation
    let score = 40; // Base baseline score
    let tasksComplete = true;
    let checklistComplete = true;
    let criticalIssues = 0;

    // Add points if a final verified file is uploaded
    if (finalFileAvailable) {
      score += 40;
    }

    // Add points if there are no critical issues
    if (criticalIssues === 0) {
      score += 20;
    }

    // Ensure the score stays strictly between 0 and 100
    score = Math.max(0, Math.min(100, score));

    // 3. Return the comprehensive readiness payload
    res.json({
      score: score,
      tasksComplete: tasksComplete,
      checklistComplete: checklistComplete,
      finalFileAvailable: finalFileAvailable,
      criticalIssues: criticalIssues
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================================
// EXPORT ROUTER
// ==========================================
module.exports = router;