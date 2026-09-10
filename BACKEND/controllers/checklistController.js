const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// GET all checklists
const getChecklists = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('checklists')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      checklists: data
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADD new checklist
const addChecklist = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('checklists')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(201).json({
      success: true,
      checklist: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE checklist
const updateChecklist = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('checklists')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      checklist: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE checklist
const deleteChecklist = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('checklists')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      message: "Checklist deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Exporting with aliases to prevent any route mismatch
module.exports = {
  getChecklists,
  getChecklist: getChecklists,
  addChecklist,
  createChecklist: addChecklist,
  updateChecklist,
  deleteChecklist
};