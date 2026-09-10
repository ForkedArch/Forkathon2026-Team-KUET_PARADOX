const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// GET all deadlines
const getDeadlines = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('deadlines')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      deadlines: data
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADD new deadline
const addDeadline = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('deadlines')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(201).json({
      success: true,
      deadline: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE deadline
const updateDeadline = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('deadlines')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      deadline: data[0]
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE deadline
const deleteDeadline = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('deadlines')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.json({
      success: true,
      message: "Deadline deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getDeadlines,
  getDeadline: getDeadlines,
  addDeadline,
  createDeadline: addDeadline,
  updateDeadline,
  deleteDeadline
};