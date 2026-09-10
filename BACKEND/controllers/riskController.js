const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// GET all risks
const getRisks = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('risks')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      risks: data
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADD new risk
const addRisk = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('risks')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(201).json({
      success: true,
      risk: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE risk
const updateRisk = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('risks')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      risk: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE risk
const deleteRisk = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('risks')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      message: "Risk deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getRisks,
  getRisk: getRisks,
  addRisk,
  createRisk: addRisk,
  updateRisk,
  deleteRisk
};