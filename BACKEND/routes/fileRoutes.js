const express = require("express");
const router = express.Router();
const multer = require("multer");

// Absolute-style relative path to bypass directory confusion
const path = require("path");
const supabase = require(path.join(__dirname, "../config/supabase"));

// Set up multer to store uploaded files in memory temporarily
const upload = multer({ storage: multer.memoryStorage() });




// 1. GET Route: Fetch all uploaded files from Supabase database
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("files").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;