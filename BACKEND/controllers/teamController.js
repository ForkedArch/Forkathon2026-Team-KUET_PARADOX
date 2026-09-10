const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// ==========================================
// GET ALL TEAM MEMBERS
// ==========================================
const getTeamMembers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      members: data
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==========================================
// ADD NEW TEAM MEMBER
// ==========================================
const addTeamMember = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(201).json({
      success: true,
      member: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==========================================
// UPDATE TEAM MEMBER
// ==========================================
const updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('team_members')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      member: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==========================================
// DELETE TEAM MEMBER
// ==========================================
const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      message: "Team member deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==========================================
// EXPORTS
// ==========================================
module.exports = {
  getTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember
};